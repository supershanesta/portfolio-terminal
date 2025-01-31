import React from 'react';

type TerminalButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  selected?: boolean;
};

export const TerminalButton: React.FC<TerminalButtonProps> = ({ onClick, children, className, selected }) => {
  return (
    <div
      className={`${selected ? 'bg-green-400/20' : 'hover:bg-green-400/20'} p-2 rounded-md hover:cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
