export const isValidBirthDate = (date: string): boolean => {
  const birthDate = new Date(date);
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  return (
    birthDate <= eighteenYearsAgo &&
    birthDate >= new Date(today.getFullYear() - 100, 0, 1)
  );
};
