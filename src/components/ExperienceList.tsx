import { gql, useQuery } from '@apollo/client';
import { useRef } from 'react';
import ExperienceCard from './ExperienceCard';

interface ExperienceFields {
  companyName: string | null;
  date: string;
}

interface Experience {
  title: string;
  content: string | null;
  experienceFields: ExperienceFields;
}

const GET_LAST_EXPERIENCES = gql`
  query getLastExperiences($first: Int = 4) {
    experiences(first: $first) {
      nodes {
        title
        content
        experienceFields {
          companyName
          date
        }
      }
    }
  }
`;

const ExperienceList = () => {
  const observerTarget = useRef(null);
  const { loading, error, data } = useQuery(GET_LAST_EXPERIENCES, {
    variables: {
      first: 4,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Unable to load experiences :/</p>;

  const experiences: Experience[] = data?.experiences.nodes || [];

  if (experiences.length === 0) {
    return <p>No experiences found.</p>;
  }

  return (
    <>
      <div className="flex w-full flex-col items-center gap-8">
        {experiences.map((experience, i) => (
          <ExperienceCard
            key={i}
            date={experience.experienceFields.date}
            jobTitle={experience.title}
            company={experience.experienceFields.companyName}
            description={experience.content}
          />
        ))}
      </div>

      <div ref={observerTarget} />
    </>
  );
};

export default ExperienceList;
