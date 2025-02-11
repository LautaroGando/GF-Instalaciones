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

  !input.state ? (errors.state = "Debes seleccionar una provincia.") : "";

  !regex.address.test(input.address)
    ? (errors.address =
        "La dirección debe contener el nombre de la calle y la altura.")
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

  !input.personalAccidentInsurance
    ? (errors.personalAccidentInsurance = " ")
    : "";

  !input.installationsAtHeight ? (errors.installationsAtHeight = " ") : "";

  !input.canvasTensioning ? (errors.canvasTensioning = " ") : "";

  !input.installationOfCorporeals
    ? (errors.installationOfCorporeals = " ")
    : "";

  !input.installationFrostedVinyls
    ? (errors.installationFrostedVinyls = " ")
    : "";

  !input.installationOfVinylOnWallsGlasses
    ? (errors.installationOfVinylOnWallsGlasses = " ")
    : "";

  !input.carwrapping ? (errors.carwrapping = " ") : "";

  !input.ownMobility ? (errors.ownMobility = " ") : "";

  return errors;
};
