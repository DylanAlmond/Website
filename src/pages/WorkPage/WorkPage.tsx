import { CardGrid, Wrapper } from './WorkPage.styles'
import Card from '../../components/Card/Card'
import { gql, useQuery } from '@apollo/client';
import { Post } from '../../common/types';
import Placeholder from '../../components/Placeholder/Placeholder';
import { useRef, useEffect, useCallback } from 'react';

const GET_ALL_POSTS = gql`
  query getAllProjects($first: Int = 12, $after: String = "") {
    projects(first: $first, after: $after) {
      nodes {
        id
        title
        projectFields {
          description
          featuredLink
          thumbnail {
            node {
              sourceUrl(size: MEDIUM)
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

const WorkPage = () => {
  const observerTarget = useRef(null);
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_POSTS, {
    variables: {
      first: 12,
      after: ""
    }
  });

  const fetchMoreData = useCallback(() => {
    if (data && data.projects.pageInfo.hasNextPage && !loading) {      
      fetchMore({
        variables: {
          first: 12,
          after: data.projects.pageInfo.endCursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;

          return {
            projects: {
              __typename: 'ProjectConnection',
              nodes: [...prev.projects.nodes, ...fetchMoreResult.projects.nodes],
              pageInfo: fetchMoreResult.projects.pageInfo,
            },
          };
        },
      });
    }
  }, [data, fetchMore, loading]);

  useEffect(() => {
    let observerElem: HTMLElement;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          fetchMoreData()
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

  if (loading) {
    return (
      <Wrapper>
        <CardGrid>
          {[...Array(12)].map((_, i) =>
            <Placeholder key={i} />
          )}
        </CardGrid>
        <div ref={observerTarget} />
      </Wrapper>
    );
  }

  if (error) return <p>Unable to load posts :/</p>;

  const posts = data?.projects.nodes || [];

  if (posts.length === 0) {
    return <p>No matching posts found.</p>;
  }

  return (
    <Wrapper>
      <CardGrid>
        {posts.map((post: Post) => (
          <Card key={post.id} post={post} />
        ))}
      </CardGrid>
      <div ref={observerTarget} />
    </Wrapper>
  )
}

export default WorkPage