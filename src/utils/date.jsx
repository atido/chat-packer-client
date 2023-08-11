export function formatDate(date) {
  const dateObj = new Date(date);

  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const year = dateObj.getFullYear();

  return `${day} ${month} ${year}`;
}
