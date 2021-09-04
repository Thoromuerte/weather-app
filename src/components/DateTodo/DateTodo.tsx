import * as React from 'react';

import { getCurrentDate, getTime } from '../../utils/date';

import styles from './dateTodo.module.css';

import iconPath from '../../assets/icons/menu.svg';

export interface Todo {
  time: string;
  text: string;
}

const temporalTodo: Todo[] = [
  {
    time: '11:00',
    text: 'Созвон',
  },
  {
    time: '13:00',
    text: 'Обед, покормить кота',
  },
  {
    time: '14:00',
    text: 'Дейлики в Геншине',
  },
  {
    time: '14:30',
    text: 'Крутануть гачу',
  },
  {
    time: '14:35',
    text: 'Поплакать',
  },
  {
    time: '15:00',
    text: 'Таски',
  },
  {
    time: '18:00',
    text: 'Зайти в Дискорд',
  },
  {
    time: '18:30',
    text: 'Выйти из Дискорда',
  },
];
export const DateTodo = (): JSX.Element => {
  const [date, setDate] = React.useState(new Date());
  const [todos, setTodos] = React.useState(temporalTodo);
  const [step, setStep] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const checkTime = window.setInterval(() => setDate(new Date()), 10000);

    return () => clearInterval(checkTime);
  }, []);

  const NextTodo = () => {
    setStep((prevStep) => prevStep + 1);
    setTodos(todos);
  };

  return (
    <div className={styles['top-left']}>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.shadow} />
          <div className={styles['modal-content']}>
            <button type="button" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
      <div className={styles['time-date']}>
        <span className={styles.time}>{getTime(date)}</span>
        <span className={styles.date}>
          {getCurrentDate('weekday')}, {date.getDate()} {getCurrentDate('month')} {date.getFullYear()}
        </span>
      </div>
      <div className={styles['todo-container']}>
        <div className={styles.menu}>
          <button type="button" className={styles['button-next']} onClick={NextTodo}>
            Next task
          </button>
          <button className={styles.open} type="button" onClick={() => setIsOpen(true)}>
            <img src={iconPath} alt="" className={styles.menu} />
          </button>
        </div>
        {todos.slice(step, step + 2).map((todo) => (
          <div className={styles['todo-item']}>
            <span className={styles['item-time']}>{todo.time}</span>
            <span className={styles['item-text']}>{todo.text}</span>
          </div>
        ))}
        {todos.length === step && <span className={styles['item-text']}>Сегодня планов нет</span>}
        <div className={styles['todo-item']}>{}</div>
      </div>
    </div>
  );
};
