"use client";
import {
  faBan,
  faBarsStaggered,
  faClock,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import IInstallationsRowProps from "./types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        className="px-4 h-12 whitespace-nowrap"
      >
        {installation.startDate || "-"}
      </motion.td>

      <motion.td
        variants={cellVariants}
        className="px-4 h-14 whitespace-nowrap"
      >
        {installation.endDate || "-"}
      </motion.td>

      <motion.td
        variants={cellVariants}
        className="px-4 h-14 whitespace-nowrap"
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
        className="px-4 h-12 whitespace-nowrap"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 14 }}
          className={clsx(
            "font-bold",
            installation.status === "Pendiente" || installation.status === "En proceso"
              ? "text-primaryColor"
              : installation.status === "A revisar"
              ? "text-admin-editColor"
              : installation.status === "Pospuesta" || installation.status === "Cancelada"
              ? "text-admin-inactiveColor"
              : "text-admin-activeColor"
          )}
        >
          {installation.status}
        </motion.span>
      </motion.td>

      <motion.td
        variants={cellVariants}
        className="px-4 h-14 align-middle whitespace-nowrap"
      >
        <span className="text-letterColor">{coordinatorName}</span>
      </motion.td>

      <motion.td
        variants={cellVariants}
        className="px-4 h-12 whitespace-nowrap"
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
        className="px-4 h-12 whitespace-nowrap"
      >
        {(installation.notes && installation.notes.trim() !== "") || installation.images ? (
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
        className="mx-auto h-12 whitespace-nowrap text-letterColorLight text-sm"
      >
        <div className="flex justify-center items-center w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="relative group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 flex items-center justify-center rounded bg-primaryColor hover:bg-primaryColorHover transition-colors"
                >
                  <FontAwesomeIcon icon={faBarsStaggered} />
                </motion.button>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-48 rounded-md shadow-lg border border-gray-200 bg-white"
            >
              {/* Editar */}
              <DropdownMenuItem
                onClick={onEdit}
                disabled={installation.status !== "Pendiente"}
                title={
                  installation.status !== "Pendiente"
                    ? "Solo se puede editar una instalación pendiente"
                    : undefined
                }
                className={`text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm rounded-md transition-colors duration-200 ${
                  installation.status !== "Pendiente"
                    ? "cursor-not-allowed text-gray-400/60"
                    : "cursor-pointer text-admin-editColor data-[highlighted]:bg-admin-editColor/10 data-[highlighted]:text-admin-editColor"
                }`}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
                Editar
              </DropdownMenuItem>

              {/* Eliminar */}
              <DropdownMenuItem
                onClick={onDelete}
                className="text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm cursor-pointer text-admin-deleteColor data-[highlighted]:bg-admin-deleteColor/10 data-[highlighted]:text-admin-deleteColor rounded-md transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faTrash} />
                Eliminar
              </DropdownMenuItem>

              {/* Cancelar */}
              <DropdownMenuItem
                onClick={onCancel}
                disabled={
                  installation.status === "Cancelada" || installation.status === "Finalizada"
                }
                title={
                  installation.status === "Cancelada" || installation.status === "Finalizada"
                    ? "No se puede cancelar una instalación ya cancelada o finalizada"
                    : undefined
                }
                className={`text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm rounded-md transition-colors duration-200 ${
                  installation.status === "Cancelada" || installation.status === "Finalizada"
                    ? "cursor-not-allowed text-gray-400/60"
                    : "cursor-pointer text-admin-inactiveColor data-[highlighted]:bg-admin-inactiveColor/10 data-[highlighted]:text-admin-inactiveColor"
                }`}
              >
                <FontAwesomeIcon icon={faBan} />
                Cancelar
              </DropdownMenuItem>

              {/* Posponer */}
              <DropdownMenuItem
                onClick={onCancel}
                className="text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm cursor-pointer text-yellow-600 data-[highlighted]:bg-yellow-100 data-[highlighted]:text-yellow-700 rounded-md transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faClock} />
                Posponer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.td>
    </motion.tr>
  );
};

export default InstallationRow;
