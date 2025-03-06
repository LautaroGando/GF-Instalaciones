import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CreateButton = () => {
  return (
    <div className="flex w-full h-[42px] mt-6 items-start justify-end">
      <button className="flex items-center justify-center gap-3 w-[167px] h-full text-letterColorLight bg-admin-activeColor rounded-[4px] transition-all duration-200 hover:bg-admin-green/70">
        <span className="text-[16px] font-bold">Crear Nuevo</span>
        <FontAwesomeIcon icon={faPlus} className="w-[16px]" />
      </button>
    </div>
  );
};

export default CreateButton;
