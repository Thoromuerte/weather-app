import * as React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './indexPage.module.css';

export const IndexPage = (): JSX.Element => {
  const history = useHistory();
  const [text, setText] = React.useState('');

  const changeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.currentTarget.value);
  };

  const searchWeather = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    history.push(`/${text}`);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={searchWeather} className={styles['search-container']}>
        <h1 className={styles['app-title']}>weather-app</h1>
        <input
          value={text}
          onChange={changeText}
          className={styles['search-input-box']}
          type="text"
          placeholder="City, Country"
        />
      </form>
    </div>
  );
};
