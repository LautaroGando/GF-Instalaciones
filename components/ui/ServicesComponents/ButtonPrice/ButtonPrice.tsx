import Link from "next/link";
import React from "react";

export const ButtonPrice: React.FC = () => {
  return (
    <Link
      href="/#contact"
      className="w-[230px] h-[40px] flex items-center font-semibold justify-center bg-primaryColor text-letterColorLight rounded-[4px] transition-all duration-300 hover:bg-primaryColorHover"
    >
      Solicitar cotización
    </Link>
  );
};

export default ButtonPrice;
