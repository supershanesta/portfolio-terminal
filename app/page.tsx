'use client';

import { Terminal } from './components/Terminal/Terminal';
import { ModeSelector } from './components/ModeSelector/ModeSelector';
import { useTerminalStore } from './store/terminalStore';
import { Home } from './components/Home/Home';
import { TerminalContent } from './components/Terminal/TerminalContent';

export default function Page() {
  const { isCommandLine } = useTerminalStore();

  return (
    <div className="bg-black">
      <Terminal>
        <div className="md:p-4 p-1 md:py-4 py-8">
          <ModeSelector />
          {isCommandLine ? <TerminalContent /> : <Home />}
        </div>
      </Terminal>
    </div>
  );
}
