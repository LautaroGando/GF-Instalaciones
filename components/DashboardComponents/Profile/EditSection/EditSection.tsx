import ButtonEditProfile from "@/components/ui/DashboardComponents/ButtonEditProfile/ButtonEditProfile";
import React from "react";

export const EditSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 items-center text-center sm:text-lg lg:flex-[0.7]">
      <h3 className="lg:text-xl">
        ¿Deseas modificar algunos de tus <br /> datos?
      </h3>
      <p className="text-sm font-light leading-loose sm:text-base sm:leading-8">
        Puedes modificar tus datos una vez al <br /> año apretando y llenando el{" "}
        <br /> formulario en el siguiente botón:
      </p>
      <ButtonEditProfile />
    </div>
  );
};

export default EditSection;
