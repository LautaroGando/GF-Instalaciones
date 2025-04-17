"use client";
import {
  faBan,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import IInstallationsRowProps from "./types";

const rowVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    borderColor: "rgba(255,255,255,0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    borderColor: "rgba(182,182,182,0.4)",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 16,
      delayChildren: 0.05,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    borderColor: "rgba(255,255,255,0)",
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const cellVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const InstallationRow: React.FC<IInstallationsRowProps> = ({
  installation,
  coordinatorName,
  onEdit,
  onDelete,
  onViewNotes,
  onViewInstallers,
  onViewAddress,
  onCancel,
  wasRecentlyEdited,
}) => {
  return (
    <motion.tr
      layout
      variants={rowVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        borderBottomWidth: 1,
        backgroundColor: wasRecentlyEdited ? "#dcfce7" : "",
      }}
      transition={{
        backgroundColor: { duration: wasRecentlyEdited ? 1.5 : 0 },
        ...rowVariants.visible.transition,
      }}
      className="border-b"
    >
      <motion.td
        variants={cellVariants}
        className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40"
      >
        {installation.startDate || "-"}
      </motion.td>

      <motion.td
        variants={cellVariants}
        className="px-4 h-14 whitespace-nowrap border-y border-admin-letterColor/40"
      >
        {installation.endDate || "-"}
      </motion.td>

      <motion.td
        variants={cellVariants}
        className="px-4 h-14 whitespace-nowrap border-y border-admin-letterColor/40"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={onViewAddress}
          className="bg-primaryColor border border-primaryColor h-[36px] px-5 font-bold text-letterColorLight rounded-[2px] transition-all duration-200 hover:bg-white hover:text-primaryColor"
        >
          Ver Dirección
        </motion.button>
      </motion.td>

      <motion.td
        variants={cellVariants}
        className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 14 }}
          className={clsx(
            "font-bold",
            installation.status === "Pendiente" ||
              installation.status === "En proceso"
              ? "text-primaryColor"
              : installation.status === "A revisar"
              ? "text-admin-editColor"
              : installation.status === "Pospuesta" ||
                installation.status === "Cancelada"
              ? "text-admin-inactiveColor"
              : "text-admin-activeColor"
          )}
        >
          {installation.status}
        </motion.span>
      </motion.td>

      <motion.td
        variants={cellVariants}
        className="px-4 h-14 align-middle whitespace-nowrap border-y border-admin-letterColor/40"
      >
        <span className="text-letterColor">{coordinatorName}</span>
      </motion.td>

      <motion.td
        variants={cellVariants}
        className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={onViewInstallers}
          className="bg-primaryColor border border-primaryColor h-[36px] px-5 font-bold text-letterColorLight rounded-[2px] transition-all duration-200 hover:bg-white hover:text-primaryColor"
        >
          Ver Instaladores
        </motion.button>
      </motion.td>

      <motion.td
        variants={cellVariants}
        className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40"
      >
        {(installation.notes && installation.notes.trim() !== "") ||
        installation.images ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={onViewNotes}
            className="bg-primaryColor border border-primaryColor h-[36px] px-5 font-bold text-letterColorLight rounded-[2px] transition-all duration-200 hover:bg-white hover:text-primaryColor"
          >
            Ver Notas
          </motion.button>
        ) : null}
      </motion.td>

      <motion.td
        variants={cellVariants}
        className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40"
      >
        <div className="flex items-center gap-2 text-base text-letterColorLight">
          {installation.status === "Pendiente" ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onEdit}
              className="bg-admin-editColor text-white w-8 h-8 rounded-[2px] border border-admin-editColor transition-all duration-200 hover:bg-white hover:text-admin-editColor"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </motion.button>
          ) : (
            <button
              onClick={onEdit}
              disabled={true}
              className="bg-gray-400 text-white w-8 h-8 rounded-[2px] transition-all duration-200 hover:bg-gray-400/70 disabled:cursor-default"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onDelete}
            className="bg-admin-inactiveColor text-white w-8 h-8 rounded-[2px] border border-admin-inactiveColor transition-all duration-200 hover:bg-white hover:text-admin-inactiveColor"
          >
            <FontAwesomeIcon icon={faTrash} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCancel}
            className="bg-admin-inactiveColor text-white w-8 h-8 rounded-[2px] border border-admin-inactiveColor transition-all duration-200 hover:bg-white hover:text-admin-inactiveColor"
          >
            <FontAwesomeIcon icon={faBan} />
          </motion.button>
        </div>
      </motion.td>
    </motion.tr>
  );
};

export default InstallationRow;
