import backgroundImage from "@/public/assets/images/auth/logoSignIn.svg";
import React from "react";
import Image from "next/image";
import WhyChooseUsSectionItems from "@/components/ui/ServicesComponents/WhyChooseUsSectionItems/WhyChooseUsSectionItems";

const WhyChooseUsSection = () => {
  return (
    <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] mt-[50px] w-screen bg-secondaryColor/85 text-white py-[25px] sm:h-[570px]">
      <Image
        src={backgroundImage}
        alt="Imagen de fondo"
        className="absolute opacity-5 left-1/2 top-[25%] -translate-x-1/2 size-[260px] pointer-events-none z-0 sm:size-[350px] sm:top-[20%] lg:size-[400px] lg:top-[15%]"
      />
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="mb-10 text-[22px] font-bold text-center sm:text-[28px] sm:mb-11 md:text-[32px] lg:mb-[68px]">
          ¿Por qué elegirnos para tu instalación?
        </h2>

        <WhyChooseUsSectionItems />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
