import { useTerminalStore } from '@/app/store/terminalStore';
import { commands } from '../../utils/commands';
import { TerminalButton } from './TerminalButton';
import { useEffect, useState } from 'react';
import { CRTWrapper } from './CRTWrapper';

export const ClickableTerminal: React.FC = () => {
  const { history, addToHistory, clearHistory } = useTerminalStore();
  const [component, setComponent] = useState<React.ReactNode>(null);
  const lastHistoryItem = history[history.length - 1];
  const lastUserItem = history.findLast((item) => item.type === 'user');

  useEffect(() => {
    if (lastHistoryItem?.component) {
      Promise.resolve(lastHistoryItem.component).then(setComponent);
    }
  }, [lastHistoryItem, history]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-6 justify-between">
        <div className="flex gap-4">
          {Object.entries(commands)
            .filter(([, command]) => command.isClickable)
            .map(([key, command]) => (
              <TerminalButton
                key={key}
                onClick={() => addToHistory(key)}
                selected={lastUserItem?.text === command.name}
              >
                {command.name}
              </TerminalButton>
            ))}
        </div>
        {component && (
          <TerminalButton
            className="self-end text-red-400"
            onClick={() => {
              clearHistory();
              setComponent(null);
            }}
          >
            Back
          </TerminalButton>
        )}
      </div>
      {component && <CRTWrapper key={lastHistoryItem.text}>{component}</CRTWrapper>}
    </div>
  );
};
