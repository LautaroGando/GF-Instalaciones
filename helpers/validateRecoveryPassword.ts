import { IUserRecoveryPassword } from "@/interfaces/IAuth";
import { regex } from "@/utils/regex";

export const validateRecoveryPassword = (input: IUserRecoveryPassword) => {
  const errors: Partial<IUserRecoveryPassword> = {};

  !regex.password.test(input.newPassword)
    ? (errors.newPassword =
        "La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, un número y un carácter especial.")
    : "";

  input.repeatPassword !== input.newPassword
    ? (errors.repeatPassword = "Las contraseñas deben coincidir.")
    : "";

  return errors;
};
