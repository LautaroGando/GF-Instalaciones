"use client";
import {
  faArrowRight,
  faBarsStaggered,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ITrackingRowsProps from "./types";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useThemeStore } from "@/store/ThemeStore/themeStore";

const rowVariants = {
  hidden: {
    opacity: 0,
    borderColor: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    borderColor: "rgba(182, 182, 182, 0.4)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    borderColor: "rgba(255, 255, 255, 0)",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const TrackingRow: React.FC<ITrackingRowsProps> = ({
  order,
  editOrder,
  deleteOrder,
  descriptionModal,
  clientInfoModal
}) => {
  const { handleUpdateOrder } = useTrackingStore();
  const { isDark } = useThemeStore();

  const handleFinishOrder = async () => {
    PersonalizedPopUp({
      color: isDark ? "#000000" : "#FAFAFA",
      withResult: false,
      titleSuccess: "Orden finalizada",
      titleError: "Error",
      textSuccess: "La orden se ha marcado como completada.",
      textError: "No se pudo finalizar la orden. Intenta de nuevo.",
      genericFunction: () =>
        handleUpdateOrder(order.id, {
          orderNumber: order.orderNumber,
          title: order.title,
          description: order.description,
          completed: true,
        }),
    });
  };

  return (
    <motion.tr
      layout="position"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={rowVariants}
      style={{ borderBottomWidth: 1 }}
    >
      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="px-4 h-12 whitespace-nowrap"
      >
        {order.orderNumber}
      </motion.td>

      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="px-4 h-12 whitespace-nowrap"
      >
        {order.title}
      </motion.td>

      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="px-4 h-14 whitespace-nowrap"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => descriptionModal()}
          className="bg-primaryColor border border-primaryColor h-[36px] px-5 rounded-[2px] font-bold text-letterColorLight transition-all duration-200 hover:text-primaryColor hover:bg-white"
        >
          Leer Descripción
        </motion.button>
      </motion.td>

      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="px-4 h-14 whitespace-nowrap"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => clientInfoModal()}
          className="bg-primaryColor border border-primaryColor h-[36px] px-5 rounded-[2px] font-bold text-letterColorLight transition-all duration-200 hover:text-primaryColor hover:bg-white"
        >
          Ver Clientes
        </motion.button>
      </motion.td>

      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="px-4 h-12 whitespace-nowrap"
      >
        12/03/2025
      </motion.td>

      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="px-4 h-12 whitespace-nowrap"
      >
        {order.endDate ? order.endDate : "-"}
      </motion.td>

      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.25 }}
        className="px-4 h-12 whitespace-nowrap min-w-[140px]"
      >
        {order.completed ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            className="text-admin-activeColor font-bold"
          >
            Completada
          </motion.span>
        ) : order.progress !== "100.00" ? (
          <div className="flex flex-col gap-1">
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-admin-inProccess font-semibold text-sm"
            >
              {order.installationsFinished}
            </motion.span>

            <div className="relative w-full h-1 rounded-full bg-gray-300 opacity-30">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${
                    (parseInt(order.installationsFinished.split("/")[0]) /
                      parseInt(order.installationsFinished.split("/")[1])) *
                    100
                  }%`,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full"
              />
            </div>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleFinishOrder}
            className="bg-admin-activeColor border border-admin-activeColor h-[36px] px-5 rounded-[2px] font-bold text-letterColorLight transition-all duration-200 hover:text-admin-activeColor hover:bg-white"
          >
            Finalizar Orden
          </motion.button>
        )}
      </motion.td>

      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="px-4 h-12 whitespace-nowrap"
      >
        <Link href={`/admin/tracking/installations?orderId=${order.id}`}>
          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            initial="initial"
            variants={{
              initial: {},
              hover: {},
            }}
            className="bg-primaryColor border border-primaryColor h-[36px] px-5 rounded-[2px] font-bold text-letterColorLight transition-all duration-200 hover:text-primaryColor hover:bg-white flex items-center gap-2"
          >
            <motion.span
              variants={{
                initial: { x: 0 },
                hover: { x: 2 },
              }}
              transition={{ duration: 0.3 }}
            >
              Ver instalaciones
            </motion.span>

            <motion.span
              variants={{
                initial: { opacity: 1, x: 0 },
                hover: { opacity: 1, x: 8 },
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </motion.span>
          </motion.button>
        </Link>
      </motion.td>

      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.35 }}
        className="px-4 h-12 whitespace-nowrap text-center"
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
                  <FontAwesomeIcon icon={faBarsStaggered} className="text-white" />
                </motion.button>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-48 rounded-md shadow-lg border border-gray-200 bg-white"
            >
              <DropdownMenuItem
                onClick={editOrder}
                className="text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm cursor-pointer text-admin-editColor data-[highlighted]:bg-admin-editColor/10 data-[highlighted]:text-admin-editColor rounded-md transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faPenToSquare} />
                Editar
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={deleteOrder}
                className="text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm cursor-pointer text-admin-deleteColor data-[highlighted]:bg-admin-deleteColor/10 data-[highlighted]:text-admin-deleteColor rounded-md transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faTrash} />
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.td>
    </motion.tr>
  );
};

export default TrackingRow;
