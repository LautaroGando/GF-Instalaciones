import ButtonPrice from "@/components/ui/ServicesComponents/ButtonPrice/ButtonPrice";
import React from "react";

export const InfoContact: React.FC = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 z-10 flex flex-col max-w-[360px] items-center gap-5 left-1/2 -translate-x-1/2">
      <h3 className="text-letterColorLight text-lg w-[330px] sm:w-[550px] sm:text-2xl">
        Contáctanos para solicitar una cotización personalizada
      </h3>
      <ButtonPrice />
    </div>
  );
};

export default InfoContact;
