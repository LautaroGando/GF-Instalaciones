import { useProfileStore } from "@/store/ProfileStore/profileStore";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { IButtonInstallerOProps } from "./types";
import { useMenuStore } from "@/store/MenuStore/menuStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

export const ButtonInstaller: React.FC<IButtonInstallerOProps> = ({
  classes,
}: IButtonInstallerOProps) => {
  const { handleClose } = useProfileStore();
  const { handleCloseMenu } = useMenuStore();

  return (
    <Link
      onClick={() => {
        handleClose();
        handleCloseMenu();
      }}
      href="/installer/installations"
      className={clsx(
        "text-primaryColor transition-all duration-500 w-max mx-auto flex items-center gap-2",
        classes
      )}
    >
      <FontAwesomeIcon className="w-[20px] text-lg" icon={faScrewdriverWrench} />
      Panel de instalador
    </Link>
  );
};

export default ButtonInstaller;
