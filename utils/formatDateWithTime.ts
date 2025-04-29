export const formatDateWithTime = (date: string | Date | null | undefined): string => {
  if (!date) return "-";

  const objectDate = new Date(date);
  if (isNaN(objectDate.getTime())) return "-";

  const year = objectDate.getFullYear();
  const month = (objectDate.getMonth() + 1).toString().padStart(2, "0");
  const day = objectDate.getDate().toString().padStart(2, "0");
  const hours = objectDate.getHours().toString().padStart(2, "0");
  const minutes = objectDate.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}hs`;
};
