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

export const getTime = (time: string | Date): string => {
  const parsedDate = new Date(time);

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
    time: getTime(new Date()),
    weekday: getCurrentDate('weekday'),
    month: getCurrentDate('month'),
    year: getCurrentYear(),
    day: getCurrentDay(),
  };
};

// export const hourlyTime: Record<number, string> = {
//   0: '00:00',
//   300: '03:00',
//   600: '06:00',
//   900: '09:00',
//   1200: '12:00',
//   1500: '15:00',
//   1800: '18:00',
//   2100: '21:00',
// };
