import IOrder from "@/interfaces/IOrder";
import InstallationsData from "../InstallationsData/InstallationsData";

export const ordersData: IOrder[] = [
  {
    id: "1a2b3c4d",
    order_id: "ORD12345",
    order_name: "Instalación de Publicidad",
    order_description:
      "Colocación de carteles en diferentes ubicaciones de la ciudad, asegurando una correcta visibilidad y posicionamiento estratégico para maximizar el impacto publicitario. Se utilizan materiales resistentes a la intemperie y se sigue un protocolo de instalación eficiente para evitar daños y garantizar la durabilidad.",
    province: "Illinois",
    client_id: "CLI56789",
    start_date: "2025-03-10",
    end_date: "2025-03-15",
    status: "Completada",
    installation_id: "INS001",
    installations: InstallationsData.slice(0, 7),
  },
  {
    id: "2e3f4g5h",
    order_id: "ORD67890",
    order_name: "Montaje de Stand",
    order_description:
      "Montaje de una estructura para evento corporativo, incluyendo la instalación de paneles, iluminación y mobiliario especializado para la presentación de productos y servicios. La instalación sigue un plan de diseño detallado para garantizar la funcionalidad y la estética del espacio.",
    province: "Tennessee",
    client_id: "CLI78901",
    start_date: "2025-03-15",
    end_date: "2025-03-18",
    status: "Completada",
    installation_id: "INS002",
    installations: InstallationsData.slice(1, 8),
  },
  {
    id: "3h4i5j6k",
    order_id: "ORD23456",
    order_name: "Rotulación de Vehículos",
    order_description:
      "Aplicación de vinilos adhesivos de alta calidad en la flota de transporte del cliente, garantizando una imagen profesional y duradera para la marca en todos los vehículos. Se emplean técnicas especializadas para evitar burbujas y asegurar una adherencia óptima a la superficie del vehículo.",
    province: "California",
    client_id: "CLI34567",
    start_date: "2025-03-20",
    end_date: "2025-03-22",
    status: "Completada",
    installation_id: "INS003",
    installations: InstallationsData.slice(2, 9),
  },
  {
    id: "4k5l6m7n",
    order_id: "ORD34567",
    order_name: "Colocación de Mobiliario",
    order_description:
      "Montaje y ajuste de mobiliario corporativo en oficinas y espacios de trabajo, asegurando la correcta disposición y funcionalidad de cada elemento instalado. Se considera la ergonomía y el diseño de los espacios para maximizar la eficiencia y comodidad de los empleados.",
    province: "Texas",
    client_id: "CLI45678",
    start_date: "2025-04-01",
    end_date: "2025-04-05",
    status: "Completada",
    installation_id: "INS004",
    installations: InstallationsData.slice(3, 10),
  },
  {
    id: "5n6o7p8q",
    order_id: "ORD45678",
    order_name: "Instalación de Pantallas LED",
    order_description:
      "Colocación y configuración de pantallas publicitarias LED en espacios comerciales y exteriores, asegurando la correcta calibración y visibilidad del contenido digital. Se incluyen pruebas de funcionamiento y ajustes técnicos para garantizar un rendimiento óptimo.",
    province: "Florida",
    client_id: "CLI56789",
    start_date: "2025-04-10",
    end_date: "2025-04-12",
    status: "Completada",
    installation_id: "INS005",
    installations: InstallationsData.slice(4, 11),
  },
  {
    id: "6q7r8s9t",
    order_id: "ORD56789",
    order_name: "Señalización de Seguridad",
    order_description:
      "Colocación de señalética en planta industrial, cumpliendo con normativas de seguridad para la protección de los trabajadores. Se emplean materiales reflectantes y resistentes al desgaste para garantizar su visibilidad y durabilidad.",
    province: "New York",
    client_id: "CLI67890",
    start_date: "2025-04-15",
    end_date: "2025-04-17",
    status: "Completada",
    installation_id: "INS006",
    installations: InstallationsData.slice(5, 12),
  },
  {
    id: "7t8u9v0w",
    order_id: "ORD67891",
    order_name: "Montaje de Estructuras Metálicas",
    order_description:
      "Ensamblaje y fijación de estructuras publicitarias en grandes superficies, asegurando resistencia estructural y cumplimiento con regulaciones de construcción. Se utilizan herramientas especializadas para garantizar una instalación segura y precisa.",
    province: "Nevada",
    client_id: "CLI78901",
    start_date: "2025-04-20",
    end_date: "2025-04-25",
    status: "Completada",
    installation_id: "INS007",
    installations: InstallationsData.slice(6, 13),
  },

  {
    id: "8x9y0z1a",
    order_id: "ORD78913",
    order_name: "Instalación de Paneles Solares",
    order_description:
      "Montaje y configuración de paneles solares en edificios comerciales, optimizando la captación de energía solar para mejorar la eficiencia energética del establecimiento.",
    province: "Arizona",
    client_id: "CLI90134",
    start_date: "2025-05-10",
    end_date: "2025-05-12",
    status: "Completada",
    installation_id: "INS008",
    installations: InstallationsData.slice(5, 12),
  },
  {
    id: "9b0c1d2e",
    order_id: "ORD89124",
    order_name: "Reacondicionamiento de Señalética",
    order_description:
      "Sustitución y modernización de señalización en áreas de alto tráfico, garantizando el cumplimiento de normas de accesibilidad y seguridad.",
    province: "Washington",
    client_id: "CLI01245",
    start_date: "2025-05-15",
    end_date: "2025-05-18",
    status: "Completada",
    installation_id: "INS009",
    installations: InstallationsData.slice(6, 13),
  },
];

export default ordersData;
