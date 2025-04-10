import React, { useCallback, useEffect, useRef } from "react";
import { IListButtonActionProps } from "./types";
import { useUserStore } from "@/store/UserStore/userStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faUser,
  faUserSecret,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import InfoUserAction from "../InfoUserAction/InfoUserAction";
import { AnimatePresence, motion } from "motion/react";

export const ButtonAction: React.FC<IListButtonActionProps> = ({
  item,
}: IListButtonActionProps) => {
  const {
    actionMenu,
    handleActiveUser,
    handleDisabledUser,
    handleActionMenu,
    handleDeleteUser,
  } = useUserStore();

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest("[data-ignored-click-outside-popup]") ||
        document.querySelector(".swal2-container")?.contains(target)
      ) {
        return;
      }

      if (modalRef.current && !modalRef.current.contains(target))
        handleActionMenu(item.id);
    },
    [handleActionMenu, item.id]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <AnimatePresence mode="wait">
      {actionMenu === item.id && (
        <motion.div
          key={actionMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed w-full h-full top-0 left-0 bg-secondaryColor/50 z-50 flex justify-center items-center"
        >
          <motion.div
            ref={modalRef}
            key={actionMenu}
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="flex min-w-[320px] flex-col items-center text-base bg-bgColor border-t-[10px] border-primaryColor rounded-md text-letterColorLight fixed p-3 gap-5 mx-3"
          >
            <InfoUserAction item={item} />
            <div className="grid grid-cols-2 justify-center gap-3 items-center">
              <button className="btnAction border-admin-editColor text-admin-editColor after:bg-admin-editColor">
                <FontAwesomeIcon icon={faPenToSquare} size="xl" />
                Editar
              </button>
              <button
                onClick={() => handleDeleteUser(item.id)}
                className="btnAction border-admin-deleteColor text-admin-deleteColor  after:bg-admin-deleteColor"
              >
                <FontAwesomeIcon icon={faTrash} size="xl" />
                Eliminar
              </button>
              <button
                onClick={
                  item.disabledAt
                    ? () => handleActiveUser(item.id)
                    : () => handleDisabledUser(item.id)
                }
                className={clsx(
                  "rounded-[3px] w-[140px] h-[100px] flex flex-col justify-center gap-2 items-center px-2 text-sm",
                  item.disabledAt
                    ? "btnAction border-admin-activeColor text-admin-activeColor after:bg-admin-activeColor"
                    : "btnAction border-admin-inactiveColor text-admin-inactiveColor after:bg-admin-inactiveColor disabled:bg-disabledButton disabled:line-through disabled:border-none disabled:text-letterColorLight"
                )}
                disabled={
                  item.installer?.status === "EN_PROCESO" ||
                  item.installer?.status === "RECHAZADO"
                }
              >
                <FontAwesomeIcon
                  icon={item.disabledAt ? faUser : faUserSlash}
                  size="xl"
                />
                {item.disabledAt ? "Activar" : "Desactivar"}
              </button>

              <button
                className="btnAction border-admin-activeColor text-admin-activeColor after:bg-admin-activeColor after:left-0 disabled:bg-disabledButton disabled:line-through disabled:border-disabledButton disabled:text-letterColorLight"
                disabled={
                  (item.installer?.status !== "APROBADO" &&
                    item.userRoles[item.userRoles.length - 1].role.name !== "Usuario") ||
                  !!item.disabledAt
                }
              >
                <FontAwesomeIcon icon={faUserSecret} size="xl" />
                Coordinador
              </button>
            </div>
            <button
              onClick={() => handleActionMenu(item.id)}
              className="bg-primaryColor w-[150px] h-[36px] mx-auto"
            >
              Volver
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ButtonAction;
