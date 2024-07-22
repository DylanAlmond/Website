import { motion } from 'framer-motion';

interface ExperienceCardProps {
  date: string;
  jobTitle: string | null;
  company: string | null;
  description: string | null;
}

const ExperienceCard = ({
  date,
  jobTitle,
  company,
  description,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }}
      className="flex w-full max-w-screen-md flex-col gap-8 lg:flex-row"
    >
      <p>{new Date(date).getFullYear()}</p>

      <div className="min-h-px min-w-full bg-onSecondary lg:min-h-full lg:min-w-px dark:bg-onSecondary-dark"></div>

      <div className="flex flex-1 flex-col gap-2">
        <p className="text-2xl">{jobTitle || 'Unknown'}</p>
        <p className="text-xl text-primary dark:text-primary-dark">
          {company || 'Anonymous'}
        </p>
        <div
          className="text-onSecondary dark:text-onSecondary-dark"
          dangerouslySetInnerHTML={{ __html: description || '<p>Unknown</p>' }}
        />
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
