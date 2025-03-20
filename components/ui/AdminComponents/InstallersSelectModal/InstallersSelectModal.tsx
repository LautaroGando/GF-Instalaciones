"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInstallersSelectModal } from "@/store/Admin/AdminModals/InstallersSelectModalStore/InstallersSelectModalStore";
import { useUserStore } from "@/store/UserStore/userStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const InstallersSelectModal: React.FC = () => {
  const { isOpen, closeModal } = useInstallersSelectModal();
  const { users, handleFetchUsers } = useUserStore();

  useEffect(() => {
    handleFetchUsers();
  }, [handleFetchUsers]);

  console.log(users);

  if (!isOpen) return null;

  const installers = users?.filter((user) => user.role.name.toLowerCase() === "instalador");
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bgColorDark bg-opacity-60 z-50 px-[15px] sm:px-[20px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-[4px] shadow-lg p-[12px] w-full max-w-[500px] sm:p-[20px]"
      >
        <h2 className="text-lg font-bold text-primaryColor mb-4">Seleccionar Instalador</h2>
        <div className="flex flex-col gap-2 rounded-[4px] overflow-y-auto h-[60vh]">
          {installers?.map((installer, i) => (
            <div key={i} className="flex items-center justify-between h-[54px] bg-black/10 px-2">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCircleUser} className="text-black/50 text-[30px]" />
                <p>{installer.fullName}</p>
              </div>
              <button className="bg-primaryColor text-white h-[36px] w-[100px] rounded-[4px] transition-bg duration-200 hover:bg-primaryColorHover">
                Asignar
              </button>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <button
            onClick={closeModal}
            className="mt-4 w-full bg-black/30 text-white p-2 rounded-[4px] transition-bg duration-200 hover:bg-black/40"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default InstallersSelectModal;
