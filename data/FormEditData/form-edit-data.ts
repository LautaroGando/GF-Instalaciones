import type { IFormEditData } from "./types";

export const formEditData: IFormEditData[] = [
  {
    label: "Nombre completo",
    name: "fullName",
    type: "text",
  },
  {
    label: "Correo Electrónico",
    name: "email",
    type: "email",
  },
  {
    label: "Fecha de nacimiento",
    name: "birthDate",
    type: "date",
  },
  {
    label: "Nº de documento",
    name: "idNumber",
    type: "text",
  },
  {
    label: "País",
    name: "country",
    select: true,
    options: [
      { value: "", option: "Selecciona una opción" },
      { value: "argentina", option: "Argentina" },
    ],
  },
  {
    label: "Provincia",
    name: "location",
    select: true,
    options: [
      { value: "", option: "Selecciona una opción" },
      { value: "caba", option: "CABA" },
      { value: "buenos_Aires", option: "Buenos Aires" },
      { value: "catamarca", option: "Catamarca" },
      { value: "chaco", option: "Chaco" },
      { value: "chubut", option: "Chubut" },
      { value: "cordoba", option: "Córdoba" },
      { value: "corrientes", option: "Corrientes" },
      { value: "entre_Rios", option: "Entre Ríos" },
      { value: "formosa", option: "Formosa" },
      { value: "jujuy", option: "Jujuy" },
      { value: "la_Pampa", option: "La Pampa" },
      { value: "la_Rioja", option: "La Rioja" },
      { value: "mendoza", option: "Mendoza" },
      { value: "misiones", option: "Misiones" },
      { value: "neuquen", option: "Neuquén" },
      { value: "rio_Negro", option: "Río Negro" },
      { value: "salta", option: "Salta" },
      { value: "san_Juan", option: "San Juan" },
      { value: "san_Luis", option: "San Luis" },
      { value: "santa_Cruz", option: "Santa Cruz" },
      { value: "santa_Fe", option: "Santa Fe" },
      { value: "santiago_Del_Estero", option: "Santiago del Estero" },
      { value: "tierra_Del_Fuego", option: "Tierra del Fuego" },
      { value: "tucuman", option: "Tucumán" },
    ],
  },
  {
    label: "Dirección",
    name: "address",
    type: "text",
  },
  {
    label: "Localidad",
    name: "locality",
    type: "text",
  },
  {
    label: "Código postal",
    name: "postalCode",
    type: "text",
  },
  {
    label: "Nº Telefónico",
    name: "phone",
    type: "text",
    isPhone: true,
    options: [{ value: "+54", option: "+54" }],
  },
];
