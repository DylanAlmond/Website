import useSectionInView from '../hooks/useSectionInView';
import ExperienceList from './ExperienceList';

const Experience = () => {
  const { ref } = useSectionInView('Experience', 0.75);

  return (
    <div
      id="experience"
      ref={ref}
      className="flex w-full scroll-mt-28 flex-col items-center gap-12 rounded-2xl py-12"
    >
      <p className="text-5xl font-medium">Experience</p>

      <ExperienceList />
    </div>
  );
};

export default Experience;
