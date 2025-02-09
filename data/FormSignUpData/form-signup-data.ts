import type { IFormSignUpData } from "./types";

export const formSignUpData: IFormSignUpData[] = [
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
    name: "state",
    select: true,
    options: [
      { value: "", option: "Selecciona una opción" },
      { value: "caba", option: "CABA" },
      { value: "buenosAires", option: "Buenos Aires" },
      { value: "catamarca", option: "Catamarca" },
      { value: "chaco", option: "Chaco" },
      { value: "chubut", option: "Chubut" },
      { value: "cordoba", option: "Córdoba" },
      { value: "corrientes", option: "Corrientes" },
      { value: "entreRios", option: "Entre Ríos" },
      { value: "formosa", option: "Formosa" },
      { value: "jujuy", option: "Jujuy" },
      { value: "laPampa", option: "La Pampa" },
      { value: "laRioja", option: "La Rioja" },
      { value: "mendoza", option: "Mendoza" },
      { value: "misiones", option: "Misiones" },
      { value: "neuquen", option: "Neuquén" },
      { value: "rioNegro", option: "Río Negro" },
      { value: "salta", option: "Salta" },
      { value: "sanJuan", option: "San Juan" },
      { value: "sanLuis", option: "San Luis" },
      { value: "santaCruz", option: "Santa Cruz" },
      { value: "santaFe", option: "Santa Fe" },
      { value: "santiagoDelEstero", option: "Santiago del Estero" },
      { value: "tierraDelFuego", option: "Tierra del Fuego" },
      { value: "tucuman", option: "Tucumán" },
    ],
  },
  {
    label: "Dirección",
    name: "address",
    type: "text",
  },
  {
    label: "Nº Telefónico",
    name: "phone",
    type: "text",
    isPhone: true,
    options: [{ value: "+54", option: "+54" }, { value: "+598", option: "+598" }],
  },
  {
    label: "Contraseña",
    name: "password",
    type: "password",
    icon: true,
  },
  {
    label: "Repetir contraseña",
    name: "repeatPassword",
    type: "password",
    icon: true,
  },
];

export const formSignUpInstallerData: IFormSignUpData[] = [
  {
    label: "Condición fiscal",
    name: "taxCondition",
    select: true,
    options: [
      { value: "", option: "Selecciona una opción" },
      { value: "monotributista", option: "Monotributista" },
      { value: "responsableInscripto", option: "Responsable Inscripto" },
      { value: "exentoEnIVA ", option: "Exento en IVA" },
    ],
  },
  {
    label: "Detalle los Trabajos que Sabe Realizar",
    name: "detailJobs",
    select: true,
    options: [{ value: "", option: "Selecciona una opción" }],
  },
  {
    label: "Amplíe Información si es Necesario o Consultas",
    name: "expandInformation",
    textarea: true,
  },
  {
    label: "¿Posee Seguro de Accidentes Personales?",
    name: "personalAccidentInsurance",
    type: "radio",
    options: [
      { value: "si", option: "Sí" },
      { value: "no", option: "No" },
    ],
  },
  {
    label: "¿Instalaciones en Altura?",
    name: "installationsAtHeight",
    type: "radio",
    options: [
      { value: "si", option: "Sí" },
      { value: "no", option: "No" },
    ],
  },
  {
    label: "¿Tensado de Lonas Front y Back?",
    name: "canvasTensioning",
    type: "radio",
    options: [
      { value: "si", option: "Sí" },
      { value: "no", option: "No" },
    ],
  },
  {
    label: "¿Instalación de Corpóreos?",
    name: "installationOfCorporeals",
    type: "radio",
    options: [
      { value: "si", option: "Sí" },
      { value: "no", option: "No" },
    ],
  },
  {
    label: "¿Instalación de Vinilos Esmerilados?",
    name: "installationFrostedVinyls",
    type: "radio",
    options: [
      { value: "si", option: "Sí" },
      { value: "no", option: "No" },
    ],
  },
  {
    label: "¿Instalación de Vinilos sobre Pared/Vidrios?",
    name: "installationOfVinylOnWallsGlasses",
    type: "radio",
    options: [
      { value: "si", option: "Sí" },
      { value: "no", option: "No" },
    ],
  },
  {
    label: "¿Forrado Completo de Autos (Carwrapping)?",
    name: "carwrapping",
    type: "radio",
    options: [
      { value: "si", option: "Sí" },
      { value: "no", option: "No" },
    ],
  },
  {
    label: "¿Posee Movilidad Propia?",
    name: "ownMobility",
    type: "radio",
    options: [
      { value: "si", option: "Sí" },
      { value: "no", option: "No" },
    ],
  },
];
