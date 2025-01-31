'use client';

import { Terminal } from './components/Terminal/Terminal';
import { ModeSelector } from './components/ModeSelector/ModeSelector';
import { useState } from 'react';
import { useTerminalStore } from './store/terminalStore';
import { ClickableTerminal } from './components/ClickableTerminal/ClickableTerminal';

export default function Home() {
  const [input, setInput] = useState('');
  const { history, currentPath, addToHistory, isCommandLine } = useTerminalStore();
  const handleCommand = (command: string) => {
    addToHistory(command);
  };

  return (
    <div className="bg-black">
      <Terminal>
        <div className="p-4">
          <ModeSelector />

          <div className="mb-4 text-green-400">
            <pre className="text-xs sm:text-sm">
              {`
 _____           _    __      _ _       
|  __ \\         | |  / _|    | (_)      
| |__) |__  _ __| |_| |_ ___ | |_  ___  
|  ___/ _ \\| '__| __|  _/ _ \\| | |/ _ \\ 
| |  | (_) | |  | |_| || (_) | | | (_) |
|_|   \\___/|_|   \\__|_| \\___/|_|_|\\___/ 
`}
            </pre>
            <p className="mt-4">Type &apos;help&apos; to see available commands.</p>
            {/* <p className="">
              You can change the mode of the terminal by clicking the button in
              the top right corner.
            </p> */}
          </div>
          {isCommandLine && (
            <>
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
            </>
          )}
          {!isCommandLine && <ClickableTerminal />}
        </div>
      </Terminal>
    </div>
  );
}
