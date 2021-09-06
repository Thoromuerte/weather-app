import * as React from 'react';

export const useKey = (
  key: string,
  handler?: (event: KeyboardEvent) => void,
): void => {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        handler?.(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, handler]);
};
