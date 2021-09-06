import * as React from 'react';

export const useClickAway = (
  ref: React.RefObject<HTMLElement | null>,
  handler?: () => void,
): void => {
  React.useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      if (!ref.current?.contains(event.target as HTMLElement)) {
        handler?.();
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, handler]);
};
