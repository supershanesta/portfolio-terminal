import { commands, HistoryItem } from './commands';

export const handleCommand = (input: string): HistoryItem => {
  const [cmd, ...args] = input.trim().split(' ');
  const command = commands[cmd.toLowerCase()];
  if (!command) {
    return {
      text: `Command not found: ${cmd}. Type 'help' for available commands.`,
      type: 'command',
    };
  }

  return command.execute(args);
};
