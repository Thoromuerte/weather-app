export const getCurrentDay = (): number => {
  const date = new Date();

  return date.getDate();
};

export const getCurrentYear = (): number => {
  const date = new Date();

  return date.getFullYear();
};

export const getCurrentDate = (name: string): string => {
  const date = new Date();

  const dateFormat = new Intl.DateTimeFormat('en-us', {
    [name]: 'long',
  });

  return dateFormat.format(date);
};

export const getTime = (): string => {
  const parsedDate = new Date();

  const hours = `${parsedDate.getHours() < 10 ? '0' : ''}${parsedDate.getHours()}`;
  const minutes = `${parsedDate.getMinutes() < 10 ? '0' : ''}${parsedDate.getMinutes()}`;

  return `${hours}:${minutes}`;
};

interface FullDate {
  time: string;
  weekday: string;
  month: string;
  year: number;
  day: number;
}

export const getFullDate = (): FullDate => {
  return {
    time: getTime(),
    weekday: getCurrentDate('weekday'),
    month: getCurrentDate('month'),
    year: getCurrentYear(),
    day: getCurrentDay(),
  };
};
