"use client";
import React, { useEffect, useState } from "react";
import TrackingTableHeader from "./TrackingTableHeader/TackingTableHeader";
import CreateButton from "@/components/ui/AdminComponents/CreateButton/CreateButton";
import { useTextModalStore } from "@/store/Admin/AdminModals/TextModalStore/TextModalStore";
import { useTrackingEditModal } from "@/store/Admin/AdminModals/EditModals/TrackingEditModalStore/TrackingEditModalStore";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import Swal from "sweetalert2";
import RenderEmptyState from "@/components/ui/AdminComponents/RenderEmptyState/RenderEmptyState";
import IOrder from "@/interfaces/IOrder";
import TrackingRow from "./TrackingRow/TrackingRow";
import { AnimatePresence } from "framer-motion";

const TrackingTable = () => {
  const { openModal: openTrackingTextModal } = useTextModalStore();
  const { openModal: openTrackingEditModal } = useTrackingEditModal();
  const { orders, handleFetchOrders, handleDeleteOrder, isLoading } = useTrackingStore();
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await handleFetchOrders();
      setTimeout(() => {
        setIsLoadingOrders(false);
      }, 500);
    };

    fetchData();
  }, [handleFetchOrders]);

  if (isLoading || isLoadingOrders) {
    return (
      <div className="flex items-center justify-center min-h-[770px]">
        <Loading theme="light" />
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <RenderEmptyState
        title="No hay órdenes registradas"
        text="Aún no se han añadido órdenes. Intenta más tarde o utiliza otro filtro."
      />
    );
  }

  const handleEditOrder = (order: IOrder) => {
    openTrackingEditModal(order);
  };

  const handleDeleteOrderClick = async (id: string) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará la orden permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    try {
      await handleDeleteOrder(id);

      Swal.fire({
        icon: "success",
        title: "Orden eliminada",
        text: "La orden ha sido eliminada correctamente.",
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "No se pudo eliminar la orden. Intenta nuevamente.";

      Swal.fire({
        icon: "error",
        title: "Error al eliminar",
        text: errorMessage,
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  const handleOpenTextModal = (title: string, text: string) => {
    openTrackingTextModal(title, text);
  };

  return (
    <>
      <div className="w-full h-[max-content] min-h-[610px] overflow-x-auto">
        <table className="text-sm text-left w-full border-collapse">
          <TrackingTableHeader />
          <tbody>
            <AnimatePresence mode="popLayout">
              {orders.map((order) => (
                <TrackingRow
                  key={order.id}
                  order={order}
                  editOrder={() => handleEditOrder(order)}
                  deleteOrder={() => handleDeleteOrderClick(order.id)}
                  openTextModal={() =>
                    handleOpenTextModal("Descripción de la Orden", order.description)
                  }
                />
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      <CreateButton />
    </>
  );
};

export default TrackingTable;
