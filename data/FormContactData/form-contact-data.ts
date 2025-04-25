import type { IFormContactData } from "./types";

export const formContactData: IFormContactData[] = [
  { name: "name", type: "text", placeholder: "Nombre:" },
  { name: "surname", type: "text", placeholder: "Apellido:" },
  { name: "email", type: "email", placeholder: "Correo electrónico:" },
  { name: "phone", type: "number", placeholder: "Teléfono:" },
  { name: "company", type: "text", placeholder: "Empresa (opcional):" },
  { name: "message", type: "text", placeholder: "Mensaje:", as: "textarea" },
];
