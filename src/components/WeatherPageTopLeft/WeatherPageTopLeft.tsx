import * as React from 'react';

import { getCurrentDate, getTime } from '../../utils/date';

import './weatherPageTopLeft.css';

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

  React.useEffect(() => {
    const checkTime = window.setInterval(() => setDate(new Date()), 10000);

    return () => clearInterval(checkTime);
  }, []);

  const NextTodo = () => {
    setStep((prevStep) => prevStep + 1);
    setTodos(todos);
  };

  return (
    <div className="top-left">
      <div className="time-date">
        <span className="time">{getTime(date)}</span>
        <span className="date">
          {getCurrentDate('weekday')}, {date.getDate()} {getCurrentDate('month')} {date.getFullYear()}
        </span>
      </div>
      <div className="todo-container">
        <button type="button" className="button-next" onClick={NextTodo}>
          Next task
        </button>
        {todos.slice(step, step + 2).map((todo) => (
          <div className="todo-item">
            <span className="item-time">{todo.time}</span>
            <span className="item-text">{todo.text}</span>
          </div>
        ))}
        {todos.length === step && <span className="item-text">Сегодня планов нет</span>}
        <div className="todo-item">{}</div>
      </div>
    </div>
  );
};
