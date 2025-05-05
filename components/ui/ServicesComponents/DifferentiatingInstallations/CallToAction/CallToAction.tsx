import React from "react";
import ButtonPrice from "../../ButtonPrice/ButtonPrice";

const CallToAction: React.FC = () => {
  return (
    <div className="mt-10 flex flex-col items-center gap-6 sm:gap-8">
      <h2 className="text-primaryColor text-xl sm:text-2xl lg:text-3xl font-semibold text-center max-w-[700px] leading-snug">
        ¿Listo para instalar tu proyecto con profesionales?
      </h2>
      <p className="text-secondaryColor/70 text-sm sm:text-base tracking-wide max-w-[500px] leading-relaxed text-center dark:text-white">
        Contá con un equipo que responde donde y cuando lo necesitás.
      </p>

      <ButtonPrice />
    </div>
  );
};

export default CallToAction;
