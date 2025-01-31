import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTerminalStore } from '@/app/store/terminalStore';

interface TerminalProps {
  children: React.ReactNode;
}

export const Terminal = ({ children }: TerminalProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [, setUserInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const { isCommandLine } = useTerminalStore();

  useEffect(() => {
    if (terminalRef.current && isCommandLine) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [children, isCommandLine]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        // Handle command submission here
        setUserInput('');
        setScrollPosition(0);
        return;
      }

      if (e.key.length === 1) {
        setUserInput((prev) => prev + e.key);
        setScrollPosition(0);
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setScrollPosition((prev) => Math.max(prev - 40, 0));
          setCursorPosition((prev) => ({ ...prev, y: prev.y - 1 }));
          break;
        case 'ArrowDown':
          e.preventDefault();
          setScrollPosition((prev) => prev + 40);
          setCursorPosition((prev) => ({ ...prev, y: prev.y + 1 }));
          break;
        case 'Backspace':
          setUserInput((prev) => prev.slice(0, -1));
          break;
        // Add more key handlers
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.div
      className="terminal-container text-green-400"
      style={{
        perspective: '1000px',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <motion.div
        className="terminal-screen flex flex-col justify-end h-full"
        animate={{
          rotateX: cursorPosition.y * 2,
          rotateY: cursorPosition.x * 2,
        }}
        style={{
          transform: `translateY(-${scrollPosition}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div ref={terminalRef} className="flex-1 overflow-y-auto scrollbar-hide">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};
