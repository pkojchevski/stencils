export const formatDate = date => {
  console.log(date);
  if (!date) return;
  return new Date(date.slice(0, 4), date.slice(5, 7), date.slice(8, 10));
};
