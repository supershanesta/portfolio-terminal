import { motion } from 'framer-motion';
import { CRTWrapper } from '../CRTWrapper/CRTWrapper';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  delay: number;
}

export const Section = ({ title, children, delay }: SectionProps) => (
  <motion.div
    className="mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{
      duration: 0.7,
      delay: delay,
      ease: [0.4, 0, 0.2, 1],
    }}
  >
    <motion.h2
      className="text-2xl font-bold mb-4 text-green-400"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay + 0.2,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {title}
    </motion.h2>
    <CRTWrapper>{children}</CRTWrapper>
  </motion.div>
);
