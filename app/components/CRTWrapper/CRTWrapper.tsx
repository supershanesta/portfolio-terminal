import { motion } from 'framer-motion';

interface CRTWrapperProps {
  children: React.ReactNode;
}

export const CRTWrapper: React.FC<CRTWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.98,
        filter: 'brightness(2) blur(5px)',
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: 'brightness(1) blur(0px)',
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="relative"
    >
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
        className="origin-top"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-green-400/20 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.1) 2px, rgba(0, 255, 0, 0.1) 4px)',
        }}
      />
    </motion.div>
  );
};
