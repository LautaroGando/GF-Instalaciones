import { IUserSignUpInstaller } from "@/interfaces/IAuth";
import { isValidBirthDate } from "@/utils/isValidBirthDate";
import { regex } from "@/utils/regex";

export const validateSignUpInstaller = (input: IUserSignUpInstaller) => {
  const errors: Partial<IUserSignUpInstaller> = {};

  !regex.fullName.test(input.fullName)
    ? (errors.fullName =
        "El nombre completo debe incluir al menos nombre y apellido, y no puede contener caracteres especiales no permitidos.")
    : "";

  !regex.email.test(input.email)
    ? (errors.email =
        "El correo electrónico no es válido. Asegúrate de que tenga un formato correcto, como usuario@ejemplo.com.")
    : "";

  !isValidBirthDate(input.birthDate)
    ? (errors.birthDate =
        "La fecha de nacimiento no es válida. Debes ser mayor de 18 años.")
    : "";

  !regex.idNumber.test(input.idNumber)
    ? (errors.idNumber =
        "El número de documento debe tener entre 5 y 20 caracteres alfanuméricos.")
    : "";

  !input.country ? (errors.country = "Debes seleccionar un país.") : "";

  !input.location ? (errors.location = "Debes seleccionar una provincia.") : "";

  !regex.address.test(input.address)
    ? (errors.address =
        "La dirección debe contener el nombre de la calle y la altura.")
    : "";

  !regex.locality.test(input.locality)
    ? (errors.locality =
        "La localidad debe tener entre 2 y 50 letras, y puede incluir espacios o guiones.")
    : "";

  !regex.postalCode.test(input.postalCode)
    ? (errors.postalCode =
        "El código postal debe tener entre 3 y 10 caracteres, letras o números.")
    : "";

  !regex.phone.test(input.phone)
    ? (errors.phone =
        "El número de teléfono debe contener solo dígitos, sin espacios ni símbolos, y tener entre 7 y 15 caracteres.")
    : "";

  !regex.password.test(input.password)
    ? (errors.password =
        "La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, un número y un carácter especial.")
    : "";

  input.repeatPassword !== input.password
    ? (errors.repeatPassword = "Las contraseñas deben coincidir.")
    : "";

  !input.taxCondition
    ? (errors.taxCondition = "Debes seleccionar la condición fiscal.")
    : "";

  !input.hasPersonalAccidentInsurance
    ? (errors.hasPersonalAccidentInsurance = true)
    : "";

  !input.canWorkAtHeight ? (errors.canWorkAtHeight = true) : "";

  !input.canTensionFrontAndBackLonas
    ? (errors.canTensionFrontAndBackLonas = true)
    : "";

  !input.canInstallCorporealSigns
    ? (errors.canInstallCorporealSigns = true)
    : "";

  !input.canInstallFrostedVinyl ? (errors.canInstallFrostedVinyl = true) : "";

  !input.canInstallVinylOnWallsOrGlass
    ? (errors.canInstallVinylOnWallsOrGlass = true)
    : "";

  !input.canDoCarWrapping ? (errors.canDoCarWrapping = true) : "";

  !input.hasOwnTransportation ? (errors.hasOwnTransportation = true) : "";

  return errors;
};
