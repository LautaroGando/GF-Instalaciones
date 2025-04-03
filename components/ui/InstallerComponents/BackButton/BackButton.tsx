import Link from "next/link";
import React from "react";

export const BackButton: React.FC = () => {
  return (
    <Link
      href="/"
      className="text-primaryColor bg-bgColor w-full flex justify-center items-center h-[50px] transition-all duration-300 relative hover:h-[80px] hover:rounded-t-[100px] hover:text-lg"
    >
      Volver
    </Link>
  );
};

export default BackButton;
