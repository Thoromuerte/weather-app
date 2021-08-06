import * as React from 'react';

import './app.css';

export const App = (): JSX.Element => {
  const [text, setText] = React.useState('');

  const changeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.currentTarget.value);
  };

  const searchWeather = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log(text);
  };

  return (
    <div className="App">
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
