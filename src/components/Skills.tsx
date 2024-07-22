import useSectionInView from '../hooks/useSectionInView';
import SkillsGrid from './SkillsGrid';

const Skills = () => {
  const { ref } = useSectionInView('Skills', 0.75);

  return (
    <div
      id="skills"
      ref={ref}
      className="flex w-full scroll-mt-28 flex-col items-center gap-12 rounded-2xl bg-surface py-12 dark:bg-surface-dark"
    >
      <p className="text-5xl font-medium">Skills</p>

      <SkillsGrid />
    </div>
  );
};

export default Skills;
