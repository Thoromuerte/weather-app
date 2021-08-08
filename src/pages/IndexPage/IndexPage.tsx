import * as React from 'react';
import { useHistory } from 'react-router-dom';

import './indexPage.css';

export const IndexPage = (): JSX.Element => {
  const history = useHistory();
  const [text, setText] = React.useState('');

  const changeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.currentTarget.value);
  };

  const searchWeather = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    history.push(`/${text}`);
    // eslint-disable-next-line no-console
    console.log(text);
  };

  return (
    <div className="container">
      <form onSubmit={searchWeather} className="search-container">
        <h1 className="app-title">weather-app</h1>
        <input
          value={text}
          onChange={changeText}
          className="search-input-box"
          type="text"
          placeholder="City, Country"
        />
      </form>
    </div>
  );
};
