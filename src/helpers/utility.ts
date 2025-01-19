export const formatDate = (inputDate: any) => {
  const date = new Date(inputDate);
  const day = String(date.getDate()).padStart(2, '0');

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const truncateString = (input: string): string => {
  if (input.length <= 11) {
    return input;
  }
  return input.substring(0, 8) + '...'; // 8 chars + 3 dots = 11 chars
}