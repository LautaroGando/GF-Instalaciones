import type { IFormSignInData } from "./types";

export const formSignInData: IFormSignInData[] = [
  {
    label: "Correo Electrónico",
    name: "emailSignIn",
    type: "email",
    icon: false,
    required: true,
  },
  {
    label: "Contraseña",
    name: "passwordSignIn",
    type: "password",
    icon: true,
    required: true,
  },
];
