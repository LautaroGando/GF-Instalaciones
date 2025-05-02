import WhyChooseUsItem from "@/components/ui/ServicesComponents/WhyChooseUsSection/WhyChooseUsItem/WhyChooseUsItem";
import {
  faBuilding,
  faClock,
  faGlobe,
  faHandshake,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen bg-secondaryColor/85 text-white py-[25px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="mb-10 text-[22px] font-bold text-center">
          ¿Por qué elegirnos para tu instalación?
        </h2>

        <div className="flex flex-col gap-6">
          <WhyChooseUsItem
            icon={faBuilding}
            text={"Especialización exclusiva en instalación gráfica (no imprimimos, ejecutamos)."}
          />
          <WhyChooseUsItem
            icon={faUserGroup}
            text={"Coordinadores expertos asignados a cada proyecto."}
          />
          <WhyChooseUsItem icon={faClock} text={"Seguimiento en tiempo real."} />
          <WhyChooseUsItem
            icon={faGlobe}
            text={"Cobertura Nacional real: actuamos en simultáneo en todo el país."}
          />
          <WhyChooseUsItem
            icon={faHandshake}
            text={"Política de Reclamo Cero: nos hacemos cargo sin excusas."}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
