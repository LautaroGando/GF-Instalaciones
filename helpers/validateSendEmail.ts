import { IUserSendEmail } from "@/interfaces/IAuth";
import { regex } from "@/utils/regex";

export const validateSendEmail = (input: IUserSendEmail) => {
  const errors: Partial<IUserSendEmail> = {};

  if (!regex.email.test(input.email))
    errors.email =
      "El correo electrónico no es válido. Asegúrate de que tenga un formato correcto, como usuario@ejemplo.com.";

  return errors;
};
