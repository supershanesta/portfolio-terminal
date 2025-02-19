import { useState } from 'react';
import { useTerminalStore } from '@/app/store/terminalStore';

export const TerminalContent = () => {
  const [input, setInput] = useState('');
  const { history, currentPath, addToHistory } = useTerminalStore();

  const handleCommand = (command: string) => {
    addToHistory(command);
  };

  return (
    <div className="p-4">
      <div className="mb-4 text-green-400">
        <p className="mt-4">Type 'help' to see available commands.</p>
      </div>
      {history.map((cmd, index) => (
        <div key={index} className="mb-2 flex content-start">
          <span className="whitespace-nowrap mr-2">{currentPath} $ </span>
          <span className="grid grid-cols-1 flex-col">
            {cmd.text.split('\n').map((line: string, i: number) => (
              <span key={i} className="w-full">
                {line || '\u00A0'}
              </span>
            ))}
          </span>
        </div>
      ))}

      <div className="flex">
        <span className="whitespace-nowrap mr-2">{currentPath} $ </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleCommand(input);
              setInput('');
            }
          }}
          className="flex-1 bg-transparent outline-none border-none text-green-400"
          autoFocus
        />
      </div>
    </div>
  );
};
