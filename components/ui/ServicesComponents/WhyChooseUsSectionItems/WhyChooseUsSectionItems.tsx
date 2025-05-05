import React from "react";
import WhyChooseUsItem from "../WhyChooseUsSection/WhyChooseUsItem/WhyChooseUsItem";
import {
  faBuilding,
  faClock,
  faGlobe,
  faHandshake,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const WhyChooseUsSectionItems = () => {
  return (
    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 sm:gap-[36px] lg:gap-y-[90px]">
      <WhyChooseUsItem
        icon={faBuilding}
        text="Especialización exclusiva en instalación gráfica (no imprimimos, ejecutamos)."
        align="left"
      />
      <WhyChooseUsItem
        icon={faGlobe}
        text="Cobertura Nacional real: actuamos en simultáneo en todo el país."
        align="right"
      />
      <WhyChooseUsItem
        icon={faUserGroup}
        text="Coordinadores expertos asignados a cada proyecto."
        align="left"
      />
      <WhyChooseUsItem
        icon={faHandshake}
        text="Política de Reclamo Cero: nos hacemos cargo sin excusas."
        align="right"
      />
      <WhyChooseUsItem icon={faClock} text="Seguimiento en tiempo real." align="left" />
    </div>
  );
};

export default WhyChooseUsSectionItems;
