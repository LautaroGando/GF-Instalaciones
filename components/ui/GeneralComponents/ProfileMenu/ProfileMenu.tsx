"use client";
import React, { useEffect, useRef } from "react";
import ButtonLogout from "../ButtonLogout/ButtonLogout";
import { useProfileStore } from "@/store/ProfileStore/profileStore";
import { useUserStore } from "@/store/UserStore/userStore";
import ButtonAction from "../ButtonAction/ButtonAction";
import { AnimatePresence, motion } from "framer-motion";
import {
  faBoxesStacked,
  faInfoCircle,
  faScrewdriverWrench,
  faUserSecret,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

export const ProfileMenu: React.FC = () => {
  const { user } = useUserStore();
  const { open, handleClose } = useProfileStore();
  const menuAdminProfileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest("[data-ignore-profile-outside-click]")) return;

      if (
        menuAdminProfileRef.current &&
        !menuAdminProfileRef.current.contains(target)
      ) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, handleClose]);

  const userInfo = user && "user" in user ? user.user : user;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={menuAdminProfileRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute w-[250px] p-0 overflow-hidden bg-bgColor rounded-b-[8px] top-full mt-[10.3px] shadow-lg shadow-bgColorDark/20 right-0 dark:bg-secondaryColor dark:shadow-bgColor/20 lg:flex lg:flex-col"
        >
          <ButtonAction
            href="/dashboard/profile"
            icon={faInfoCircle}
            label="Ver perfil"
          />
          {userInfo?.userRoles[userInfo.userRoles.length - 1].role.name ===
            "Usuario" &&
            userInfo?.userRoles.find((u) => u.role.name === "Usuario") && (
              <ButtonAction
                href="/my-orders"
                icon={faBoxesStacked}
                label="Mis órdenes"
              />
            )}
          {userInfo?.userRoles.find((u) => u.role.name === "Instalador") && (
            <ButtonAction
              href="/installer/installations"
              icon={faScrewdriverWrench}
              label="Panel de instalador"
            />
          )}
          {userInfo?.userRoles.find((u) => u.role.name === "Coordinador") && (
            <ButtonAction
              href="/coordinator/installations"
              icon={faUserSecret}
              label="Panel de coordinador"
            />
          )}
          {userInfo?.userRoles.find((u) => u.role.name === "Admin") && (
            <ButtonAction
              href="/admin/panel"
              icon={faUserTie}
              label="Panel de admin"
            />
          )}
          <ButtonLogout classes="lg:flex lg:gap-3 lg:items-center lg:w-full lg:h-[50px] lg:text-center lg:transition-all lg:p-3 lg:hover:text-error" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileMenu;
