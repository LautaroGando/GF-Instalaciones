import { useProfileStore } from "@/store/ProfileStore/profileStore";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { IButtonInstallerOProps } from "./types";
import { useMenuStore } from "@/store/MenuStore/menuStore";

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
        "text-primaryColor border-b border-b-transparent transition-all duration-500 w-max mx-auto hover:border-b-primaryColor",
        classes
      )}
    >
      Panel de instalador
    </Link>
  );
};

export default ButtonInstaller;
