import { motion } from 'framer-motion';
import { data } from '@/app/data/data';
import { useMediaQuery } from 'react-responsive';

const About: React.FC = () => {
  const { about } = data;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const paragraphs = isMobile ? about.mobileParagraphs : about.paragraphs;

  return (
    <div className="prose prose-invert max-w-none space-y-4">
      {paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg leading-relaxed"
        >
          {paragraph}
        </motion.p>
      ))}
    </div>
  );
};

export default About;
