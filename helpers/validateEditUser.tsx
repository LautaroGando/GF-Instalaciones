import { IUserEdit } from "@/interfaces/IProfile";
import { findUsers } from "@/services/users";
import { isValidBirthDate } from "@/utils/isValidBirthDate";

export const validateEditUser = async (input: IUserEdit) => {
  const errors: Partial<IUserEdit> = {};

  const users = await findUsers();
  const verifyUser = localStorage.getItem("user-storage");
  const setUser = verifyUser && JSON.parse(verifyUser);
  const userLogin = setUser.state.user;

  for await (const user of users) {
    input.email === user.email && userLogin.email !== user.email
      ? (errors.email = "El correo electrónico indicado ya existe.")
      : "";
    input.idNumber === user.idNumber && userLogin.idNumber !== user.idNumber
      ? (errors.idNumber = "El número de documento indicado ya existe.")
      : "";
    input.phone === user.phone && userLogin.phone !== user.phone
      ? (errors.phone = "El número telefónico indicado ya existe.")
      : "";
  }

  !isValidBirthDate(input.birthDate)
    ? (errors.birthDate =
        "La fecha de nacimiento no es válida. Debes ser mayor de 18 años.")
    : "";

  return errors;
};
