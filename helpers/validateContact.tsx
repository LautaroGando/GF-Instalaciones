import { IContact } from "@/interfaces/IContact";
import { regex } from "@/utils/regex";

export const validateContact = (input: IContact) => {
  const errors: Partial<IContact> = {};

  !regex.name.test(input.name)
    ? (errors.name =
        "El nombre debe tener entre 3 y 30 palabras, y solo puede contener letras, espacios, guiones o apóstrofes.")
    : "";

  !regex.surname.test(input.surname)
    ? (errors.surname =
        "El apellido debe tener entre 3 y 30 palabras, y solo puede contener letras, espacios, guiones o apóstrofes.")
    : "";

  !regex.email.test(input.email)
    ? (errors.email =
        "El correo electrónico no es válido. Asegúrate de que tenga un formato correcto, como usuario@ejemplo.com.")
    : "";

  !regex.message.test(input.message)
    ? (errors.message = "El mensaje debe tener entre 6 y 200 caracteres.")
    : "";

  return errors;
};
