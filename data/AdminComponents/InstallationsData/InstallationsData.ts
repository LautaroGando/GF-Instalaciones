import IInstallation from "@/interfaces/IInstallation";
import TInstallationStatus from "@/types/TInstallationStatus";

const streets = [
  "Avenida Siempre Viva", "Calle Falsa", "Boulevard del Sol", "Avenida Central",
  "Camino Verde", "Calle Mayor", "Avenida del Río", "Calle del Comercio",
  "Boulevard Norte", "Avenida Tecnológica", "Calle Oeste", "Carretera Nacional"
];

const cities = [
  "Springfield", "Shelbyville", "Capital City", "Ogdenville", "North Haverbrook",
  "Brockway", "Cypress Creek", "Miami", "Los Angeles", "New York", "Denver", "Las Vegas"
];

const provinces = [
  "Illinois", "Tennessee", "California", "Texas", "Florida", "Georgia", "Nevada",
  "New York", "Colorado", "Oregon", "Washington", "Arizona"
];

const statuses: TInstallationStatus[] = ["Pendiente", "En proceso", "A revisar", "Pospuesta", "Finalizada", "Cancelada"];

const getRandomElement = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

const generateInstallations = (count: number): IInstallation[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    startDate: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`,
    address: {
      street: getRandomElement(streets),
      number: String(Math.floor(Math.random() * 9999) + 1),
      note: getRandomElement(["Edificio amarillo", "Casa con portón rojo", "Departamento 2B", "Oficina en tercer piso", "Local comercial en planta baja", "Entrada trasera"]),
      postalCode: String(Math.floor(Math.random() * 90000) + 10000),
      city: getRandomElement(cities),
      province: getRandomElement(provinces),
    },
    notes: getRandomElement(["Llamar antes de llegar", "Cliente solo disponible en la mañana", "Requiere herramientas especiales", "Acceso restringido, solicitar autorización", "Instalación al aire libre", "Confirmar asistencia con el cliente"]),
    status: getRandomElement(statuses),
  }));
};

const InstallationsData: IInstallation[] = generateInstallations(60);

export default InstallationsData;
