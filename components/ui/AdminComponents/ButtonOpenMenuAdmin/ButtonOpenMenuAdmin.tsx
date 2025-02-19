"use client";
import { useAdminProfileStore } from "@/store/AdminProfileStore/adminProfileStore";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";

export const ButtonOpenMenuAdmin: React.FC = () => {
  const { open, handleToggle } = useAdminProfileStore();

  return (
    <button type="button" onClick={handleToggle} data-ignore-outside-click>
      <FontAwesomeIcon
        className={clsx(
          "text-letterColorLight text-[10px] transition-all duration-300",
          open && "-rotate-180"
        )}
        icon={faChevronDown}
      />
    </button>
  );
};

export default ButtonOpenMenuAdmin;
