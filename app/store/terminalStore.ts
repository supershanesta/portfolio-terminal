import { create } from 'zustand';
import { handleCommand } from '../utils/commandHandler';
import { HistoryItem } from '../utils/commands';

interface TerminalState {
  history: HistoryItem[];
  currentPath: string;
  isCommandLine: boolean;
  addToHistory: (command: string) => void;
  setPath: (path: string) => void;
  setMode: (isCommandLine: boolean) => void;
  clearHistory: () => void;
}

export const useTerminalStore = create<TerminalState>((set) => ({
  history: [],
  currentPath: '~',
  isCommandLine: false,
  addToHistory: (command) => {
    const historyCommand: HistoryItem = { text: command, type: 'user' };
    const result = handleCommand(command);
    const items = result ? [historyCommand, result] : [historyCommand];

    set((state) => {
      if (command === 'clear') {
        return { history: [] };
      }
      return { history: [...state.history, ...items] };
    });
  },
  setPath: (path) => set({ currentPath: path }),
  setMode: (isCommandLine) => set({ isCommandLine }),
  clearHistory: () => set({ history: [] }),
}));
