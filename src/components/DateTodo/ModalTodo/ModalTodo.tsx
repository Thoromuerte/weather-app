import * as React from 'react';
import { useClickAway } from '../../../utils/useClickAway';
import { useKey } from '../../../utils/useKey';

import styles from './modalTodo.module.css';

interface ModalTodoProps {
  open?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const ModalTodo = (props: ModalTodoProps) => {
  const { open, children, onClose } = props;
  const modalElement = React.useRef<HTMLDivElement>(null);

  useClickAway(modalElement, onClose);
  useKey('Escape', onClose);

  if (!open) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.shadow} />
      <div className={styles.content} ref={modalElement}>
        {children}
      </div>
    </div>
  );
};
