const DateFormatter = (date: string) => {
  const oldData = new Date(date);
  return (
    ('0' + oldData.getDate()).slice(-2) +
    '/' +
    ('0' + (oldData.getMonth() + 1)).slice(-2) +
    '/' +
    oldData.getFullYear()
  );
};

export default DateFormatter;
