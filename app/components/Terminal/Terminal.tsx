import { useState, useEffect, useRef } from 'react';
import { useTerminalStore } from '@/app/store/terminalStore';

interface TerminalProps {
  children: React.ReactNode;
}

export const Terminal = ({ children }: TerminalProps) => {
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const lastScrollPosition = useRef(0);
  const { isCommandLine } = useTerminalStore();

  useEffect(() => {
    if (terminalRef.current && isCommandLine) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [children, isCommandLine]);

  useEffect(() => {
    const handleScroll = () => {
      if (terminalRef.current) {
        const currentScroll = terminalRef.current.scrollTop;
        const speed = Math.abs(currentScroll - lastScrollPosition.current);
        setScrollSpeed(speed);
        lastScrollPosition.current = currentScroll;
      }
    };

    const terminal = terminalRef.current;
    terminal?.addEventListener('scroll', handleScroll);
    return () => terminal?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="terminal-container  md:w-[90vw] w-full text-green-400">
      <div className="terminal-screen flex flex-col justify-end h-full">
        <div className="scanlines" style={{ opacity: 0.1 + Math.min(scrollSpeed / 100, 0.5) }} />
        <div ref={terminalRef} className="flex-1 overflow-y-auto scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
};
