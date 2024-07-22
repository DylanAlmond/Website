import { gql, useQuery } from '@apollo/client';
import SkillsCard from './SkillsCard';
import { useCallback, useEffect, useRef } from 'react';

interface SkillFields {
  logo: {
    node: {
      sourceUrl: string;
    };
  };
}

interface Skill {
  title: string;
  skillFields: SkillFields;
}

const GET_ALL_SKILLS = gql`
  query getAllSkills($first: Int = 12, $after: String = "") {
    skills(first: $first, after: $after) {
      nodes {
        title
        skillFields {
          logo {
            node {
              sourceUrl(size: THUMBNAIL)
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

const SkillsGrid = () => {
  const observerTarget = useRef(null);
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_SKILLS, {
    variables: {
      first: 12,
      after: '',
    },
  });

  const fetchMoreData = useCallback(() => {
    if (data && data.skills.pageInfo.hasNextPage && !loading) {
      fetchMore({
        variables: {
          first: 12,
          after: data.skills.pageInfo.endCursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;

          return {
            skills: {
              __typename: 'SkillConnection',
              nodes: [...prev.skills.nodes, ...fetchMoreResult.skills.nodes],
              pageInfo: fetchMoreResult.skills.pageInfo,
            },
          };
        },
      });
    }
  }, [data, fetchMore, loading]);

  useEffect(() => {
    let observerElem: HTMLDivElement;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMoreData();
        }
      },
      { threshold: 0 }
    );

    if (observerTarget.current) {
      observerElem = observerTarget.current;
      observer.observe(observerElem);
    }

    return () => {
      if (observerElem) {
        observer.unobserve(observerElem);
      }
    };
  }, [fetchMoreData]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Unable to load skills :/</p>;

  const skills: Skill[] = data?.skills.nodes || [];

  if (skills.length === 0) {
    return <p>No skills found.</p>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, i) => (
          <SkillsCard
            key={i}
            image={skill.skillFields.logo.node.sourceUrl}
            name={skill.title}
          />
        ))}
      </div>

      <div ref={observerTarget} />
    </>
  );
};

export default SkillsGrid;
