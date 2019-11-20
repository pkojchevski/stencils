export const formatDate = date => {
  console.log(date);
  if (!date) return;
  return new Date(
    Date.UTC(date.slice(0, 4), date.slice(5, 7) - 1, date.slice(8, 10))
  );
};
