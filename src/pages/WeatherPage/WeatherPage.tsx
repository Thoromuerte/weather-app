import * as React from 'react';
import { useParams } from 'react-router-dom';

export const WeatherPage = (): JSX.Element => {
  const params = useParams<{ city:string }>();

  // eslint-disable-next-line no-console
  console.log(params);

  // {params.city}
  return (
    <div>
      <div className=""></div>
    </div>
  );
};
