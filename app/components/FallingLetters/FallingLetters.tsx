'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FallingLettersProps {
  text: string;
  className?: string;
}

const FallingLetters: React.FC<FallingLettersProps> = ({ text, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate random delays once when component mounts
  const randomDelays = useMemo(() => Array.from({ length: text.length }, () => Math.random() * 0.3), [text]);

  return (
    <div
      className={`inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {text.split('').map((letter, index) => (
          <AnimatePresence key={index}>
            <motion.span
              initial={{ y: 0 }}
              animate={
                isHovered
                  ? {
                      y: [0, Math.random() * 1000 + 50],
                      opacity: [1, 0],
                    }
                  : { y: 0, opacity: 1 }
              }
              transition={{
                duration: 1,
                delay: randomDelays[index],
                ease: 'easeIn',
              }}
              className="inline-block"
              style={{ position: isHovered ? 'relative' : 'static' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default FallingLetters;
