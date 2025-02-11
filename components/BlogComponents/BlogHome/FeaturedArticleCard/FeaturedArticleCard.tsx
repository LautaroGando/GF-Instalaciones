import React from "react";

const FeaturedArticleCard: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto py-[45px] lg:flex-row lg:justify-between lg:gap-[40px]">
      <div className="bg-[#D9D9D9] w-full h-[150px] rounded-[8px] sm:h-[225px] md:h-[300px] lg:h-[225px] lg:max-w-[405px] xl:max-w-[615px] xl:h-[270px]"></div>
      <div className="flex flex-col gap-[14px] py-[10px] text-center font-medium sm:text-left sm:py-[20px] lg:gap-[17px] xl:gap[27px]">
        <p className="text-[12px] font-bold text-[#8f8f8f] sm:text-[14px] xl:text-[16px]">ARTICULO DESTACADO</p>
        <h3 className="text-[20px] text-primaryColor font-bold sm:text-[22px] xl:text-[24px]">
          Cómo crear una página web desde cero: guía para principiantes
        </h3>
        <p className="text-[14px] xl:text-[18px]">
          Tanto si quieres ampliar tu negocio en internet, mostrar tu portfolio o crear un blog, un
          sitio web es tu puerta de entrada para llegar a un público...
        </p>
        <p className="text-[15px] text-primaryColor sm:text-[17px] xl:text-[18px]">Jan 08, 2025</p>
      </div>
    </div>
  );
};

export default FeaturedArticleCard;
