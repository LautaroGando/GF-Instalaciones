"use client";
import { faArrowRight, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ITrackingRowsProps from "./types";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import Swal from "sweetalert2";

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
  openTextModal,
}) => {
  const { handleUpdateOrder } = useTrackingStore();

  const handleFinishOrder = async () => {
    try {
      await handleUpdateOrder(order.id, {
        orderNumber: order.orderNumber,
        title: order.title,
        description: order.description,
        completed: true,
      });

      Swal.fire({
        icon: "success",
        title: "Orden finalizada",
        text: "La orden se ha marcado como completada.",
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (error) {
      console.error("Error al finalizar la orden:", error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo finalizar la orden. Intenta de nuevo.",
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <motion.tr
      layout
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={rowVariants}
      style={{ borderBottomWidth: 1 }}
      className="border-b"
    >
      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40"
      >
        {order.orderNumber}
      </motion.td>

      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40"
      >
        {order.title}
      </motion.td>

      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="px-4 h-14 whitespace-nowrap border-y border-admin-letterColor/40"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => openTextModal()}
          className="bg-primaryColor border border-primaryColor h-[36px] px-5 rounded-[2px] font-bold text-letterColorLight transition-all duration-200 hover:text-primaryColor hover:bg-white"
        >
          Leer Descripción
        </motion.button>
      </motion.td>

      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40"
      >
        12/03/2025
      </motion.td>

      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40"
      >
        {order.endDate ? order.endDate : "-"}
      </motion.td>

      <motion.td
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.25 }}
        className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40 min-w-[140px]"
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
        className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40"
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
        className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40 text-center"
      >
        <div className="flex items-center justify-start gap-4 text-base text-letterColorLight">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => editOrder()}
            className="bg-admin-editColor text-white w-8 h-8 rounded-[2px] transition-all duration-200 hover:bg-white hover:text-admin-editColor border border-admin-editColor"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => deleteOrder()}
            className="bg-admin-inactiveColor text-white w-8 h-8 rounded-[3px] border border-admin-inactiveColor transition-all duration-200 hover:bg-white hover:text-admin-inactiveColor"
          >
            <FontAwesomeIcon icon={faTrash} />
          </motion.button>
        </div>
      </motion.td>
    </motion.tr>
  );
};

export default TrackingRow;
