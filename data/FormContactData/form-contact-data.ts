import type { IFormContactData } from "./types";

export const formContactData: IFormContactData[] = [
  { name: "name", type: "text", placeholder: "Nombre" },
  { name: "surname", type: "text", placeholder: "Apellido" },
  { name: "email", type: "email", placeholder: "Correo electrónico" },
  { name: "message", type: "text", placeholder: "Mensaje", as: "textarea" },
];
