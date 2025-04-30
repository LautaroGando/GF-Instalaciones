export const formatDate = (date: string) => {
  const objectDate = new Date(date);
  const year = objectDate.getFullYear();
  const month =
    objectDate.getMonth() < 10
      ? `0${objectDate.getMonth() + 1}`
      : objectDate.getMonth() + 1;
  const day =
    objectDate.getDate() < 10
      ? `0${objectDate.getDate()}`
      : objectDate.getDate();

  return `${day}/${month}/${year}`;
};

export const formatDateToInput = (date: string) => {
  const [day, month, year] = date.split("/");
  return `${year}-${month}-${day}`;
};

export const formatHour = (date: string) => {
  const objectDate = new Date(date);

  const hours = objectDate.getHours().toString().padStart(2, "0");
  const minutes = objectDate.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}hs`;
};
