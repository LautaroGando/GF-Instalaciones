import Link from "next/link";
import React from "react";

export const ButtonProfile: React.FC = () => {
  return (
    <Link
      href="/"
      className="text-primaryColor border-b border-b-transparent transition-all duration-500 w-max mx-auto hover:border-b-primaryColor"
    >
      Ver perfil
    </Link>
  );
};

export default ButtonProfile;
