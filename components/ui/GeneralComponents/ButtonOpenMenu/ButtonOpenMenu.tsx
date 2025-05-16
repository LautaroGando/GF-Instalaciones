"use client";
import { useProfileStore } from "@/store/ProfileStore/profileStore";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";
import { IButtonOpenMenuProps } from "./types";

export const ButtonOpenMenu: React.FC<IButtonOpenMenuProps> = ({
  admin,
}: IButtonOpenMenuProps) => {
  const { open, handleToggle } = useProfileStore();

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="h-[60px]"
      data-ignore-profile-outside-click
    >
      <FontAwesomeIcon
        className={clsx(
          "transition-all duration-300",
          open && "-rotate-180",
          admin && "text-letterColorLight"
        )}
        width={10}
        icon={faChevronDown}
      />
    </button>
  );
};

export default ButtonOpenMenu;
