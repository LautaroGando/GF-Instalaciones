import { useMenuStore } from "@/store/MenuStore/menuStore";
import { useProfileStore } from "@/store/ProfileStore/profileStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { IButtonActionProps } from "./types";

export const ButtonAction: React.FC<IButtonActionProps> = ({
  href,
  icon,
  label,
}: IButtonActionProps) => {
  const { handleClose } = useProfileStore();
  const { handleCloseMenu } = useMenuStore();

  return (
    <Link
      onClick={() => {
        handleClose();
        handleCloseMenu();
      }}
      href={href}
      className="text-primaryColor transition-all duration-300 w-max mx-auto flex items-center gap-2 lg:flex lg:gap-3 lg:items-center lg:w-full lg:h-[50px] lg:text-center lg:transition-all lg:p-3 lg:hover:bg-primaryColor/20 lg:hover:font-semibold lg:hover:border-none"
    >
      <FontAwesomeIcon className="w-[20px] text-lg" icon={icon} />
      {label}
    </Link>
  );
};

export default ButtonAction;
