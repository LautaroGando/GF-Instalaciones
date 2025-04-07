'use client';
import { useInstallationsCreateModal } from "@/store/Admin/AdminModals/CreateModals/InstallationsCreateModalStore/InstalationsCreateModalStore";
import { useTrackingCreateModal } from "@/store/Admin/AdminModals/CreateModals/TrackingCreateModalStore/TrackingCreateModalStore";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

const CreateButton = () => {
  const pathname = usePathname();

  const { openModal: openTrackingModal } = useTrackingCreateModal();
  const { openModal: openInstallationModal } = useInstallationsCreateModal();

  const openModal =
    pathname === "/admin/tracking"
      ? openTrackingModal
      : pathname === "/admin/tracking/installations"
      ? openInstallationModal
      : () => {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex w-full h-[42px] mt-6 items-start justify-end"
    >
      <motion.button
        onClick={openModal}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center justify-center gap-3 w-[167px] h-full text-letterColorLight bg-primaryColor rounded-[4px] transition-all duration-200 hover:bg-primaryColorHover"
      >
        <span className="text-[16px] font-bold">Crear Nuevo</span>
        <motion.span
          whileHover={{ rotate: 90 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <FontAwesomeIcon icon={faPlus} className="w-[16px]" />
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default CreateButton;
