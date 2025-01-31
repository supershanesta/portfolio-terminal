import { useTerminalStore } from '../../store/terminalStore';

export const ModeSelector = () => {
  const { isCommandLine, setMode } = useTerminalStore();

  return (
    <div className="fixed top-2 right-0 z-50 bg-black/80 p-2 rounded-lg border border-green-400/20 opacity-60">
      <button
        onClick={() => setMode(true)}
        className={`px-3 py-1 rounded-l-md ${isCommandLine ? 'bg-green-400 text-black' : 'text-green-400'}`}
      >
        Command Line
      </button>
      <button
        onClick={() => setMode(false)}
        className={`px-3 py-1 rounded-r-md ${!isCommandLine ? 'bg-green-400 text-black' : 'text-green-400'}`}
      >
        GUI
      </button>
    </div>
  );
};
