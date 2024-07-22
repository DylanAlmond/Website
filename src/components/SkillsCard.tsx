import { motion } from 'framer-motion';
import placeholder from '../assets/placeholder.png';

interface SkillsCardProps {
  image: string;
  name: string;
}

const SkillsCard = ({ image, name }: SkillsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }}
      className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-8"
    >
      <img
        className="h-20 w-20"
        src={image || placeholder}
        alt=""
        loading="lazy"
      />
      <p>{name || 'Unknown'}</p>
    </motion.div>
  );
};

export default SkillsCard;
