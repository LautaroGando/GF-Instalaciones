import { IWhyChooseUsItemProps } from "@/components/ui/ServicesComponents/WhyChooseUsSection/WhyChooseUsItem/types";
import {
  faBuilding,
  faClock,
  faGlobe,
  faHandshake,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export const whyChooseUsItems: IWhyChooseUsItemProps[] = [
  {
    icon: faBuilding,
    text: "Especialización exclusiva en Instalación Gráfica (no imprimimos, ejecutamos).",
    align: "left",
  },
  {
    icon: faGlobe,
    text: "Cobertura Nacional real: actuamos en simultáneo en todo el País.",
    align: "right",
  },
  {
    icon: faUserGroup,
    text: "Coordinadores expertos asignados a cada proyecto.",
    align: "left",
  },
  {
    icon: faHandshake,
    text: "Política de Reclamo Cero: nos hacemos cargo sin excusas.",
    align: "right",
  },
  {
    icon: faClock,
    text: "Seguimiento en tiempo real.",
    align: "left",
  },
];

export default whyChooseUsItems;
