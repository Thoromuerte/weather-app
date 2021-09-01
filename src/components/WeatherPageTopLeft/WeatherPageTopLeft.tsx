import * as React from 'react';

import { getCurrentDate, getTime } from '../../utils/date';

import './weatherPageTopLeft.css';

export interface Todo {
  time: string;
  text: string;
}

export interface DateTodoProps {
  todo: Todo[];
}

export const DateTodo = (props: DateTodoProps): JSX.Element => {
  const { todo } = props;
  const [date, setDate] = React.useState(new Date());
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const checkTime = window.setInterval(() => setDate(new Date()), 10000);

    return () => clearInterval(checkTime);
  }, []);

  const countIncrease = () => {
    const increasedCount = count + 1;
    setCount(increasedCount);
  };

  const filterTodoList = (dataTodo: Todo[]): Todo[] => {
    return [dataTodo[count] ?? { time: '&', text: '' }, dataTodo[count + 1] ?? { time: '', text: '' }];
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
        {count === todo.length ? (
          <button type="button" className="button-next">
            ADD NEW TASK
          </button>
        ) : (
          <div>
            <button type="button" className="button-next" onClick={countIncrease}>
              NEXT
            </button>
            <button type="button" className="button-next">
              ADD NEW TASK
            </button>
          </div>
        )}
        <div className="todo-list">
          {filterTodoList(todo).map((dataTodo) => {
            return (
              <div className="todo-item">
                <span className="item-time">{dataTodo.time === '&' ? 'На сегодня планов нет' : dataTodo.time}</span>
                <span className="item-text">{dataTodo.text ?? ''}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
