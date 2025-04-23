import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const BackButton: React.FC = () => {
  return (
    <Link
      href="/"
      className="text-installer-backButton w-full flex gap-3 justify-center items-center h-[50px] transition-all duration-300 hover:text-installer-backButtonHover"
    >
      Salir
      <FontAwesomeIcon
        className="w-5 text-xl"
        icon={faArrowRightFromBracket}
        width={20}
      />
    </Link>
  );
};

export default BackButton;
