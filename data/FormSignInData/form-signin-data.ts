import type { IFormSignInData } from "./types";

export const formSignInData: IFormSignInData[] = [
  {
    label: "Correo Electrónico",
    name: "emailSignin",
    type: "email",
    icon: false,
    required: true,
  },
  {
    label: "Contraseña",
    name: "passwordSignin",
    type: "password",
    icon: true,
    required: true,
  },
];
