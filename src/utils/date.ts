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
