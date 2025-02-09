const getBirthDateRegex = () => {
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 100;
  const maxYear = currentYear - 18;

  return new RegExp(
    `^(${minYear}|19[0-9]{2}|200[0-9]|20[1-${maxYear.toString().slice(-1)}])` +
      `-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$`
  );
};

export const regex = {
  name: /^([A-ZÁÉÍÓÚÑa-záéíóúñ]+(?:[' -][A-ZÁÉÍÓÚÑa-záéíóúñ]+)*){3,30}$/,
  fullName:
    /^([A-ZÁÉÍÓÚÑa-záéíóúñ]+(?:[' -][A-ZÁÉÍÓÚÑa-záéíóúñ]+)*)\s+([A-ZÁÉÍÓÚÑa-záéíóúñ]+(?:[' -][A-ZÁÉÍÓÚÑa-záéíóúñ]+)*){1,30}$/,
  birthDate: getBirthDateRegex(),
  idNumber: /^[A-Z0-9]{5,20}$/,
  surname: /^([A-ZÁÉÍÓÚÑa-záéíóúñ]+(?:[' -][A-ZÁÉÍÓÚÑa-záéíóúñ]+)*){3,30}$/,
  phone: /^\+[1-9]\d{1,14}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  message: /^.{6,200}$/,
};
