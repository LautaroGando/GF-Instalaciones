"use client";
import React, { useEffect, useState } from "react";
import TrackingTableHeader from "./TrackingTableHeader/TackingTableHeader";
import CreateButton from "@/components/ui/AdminComponents/CreateButton/CreateButton";
import { useTextModalStore } from "@/store/Admin/AdminModals/TextModalStore/TextModalStore";
import { useTrackingEditModal } from "@/store/Admin/AdminModals/EditModals/TrackingEditModalStore/TrackingEditModalStore";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import RenderEmptyState from "@/components/ui/AdminComponents/RenderEmptyState/RenderEmptyState";
import IOrder from "@/interfaces/IOrder";
import TrackingRow from "./TrackingRow/TrackingRow";
import { AnimatePresence } from "framer-motion";
import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";

const TrackingTable = () => {
  const { openModal: openTrackingTextModal } = useTextModalStore();
  const { openModal: openTrackingEditModal } = useTrackingEditModal();
  const {
    handleFetchOrders,
    handleDeleteOrder,
    isLoading,
    getFilteredOrders,
  } = useTrackingStore();
  
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);
  const filteredOrders = getFilteredOrders();

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

  if (!filteredOrders || filteredOrders.length === 0) {
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
    await PersonalizedPopUp({
      withResult: true,
      text: "Esta acción eliminará la orden permanentemente.",
      textError: "No se pudo eliminar la orden. Intenta nuevamente.",
      textSuccess: "La orden ha sido eliminada correctamente.",
      title: "¿Estás seguro?",
      titleError: "Error al eliminar",
      titleSuccess: "Orden eliminada",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sí, eliminar",
      genericFunction: () => handleDeleteOrder(id),
    });
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
              {filteredOrders.map((order) => (
                <TrackingRow
                  key={order.id}
                  order={order}
                  editOrder={() => handleEditOrder(order)}
                  deleteOrder={() => handleDeleteOrderClick(order.id)}
                  openTextModal={() =>
                    handleOpenTextModal(
                      "Descripción de la Orden",
                      order.description
                    )
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
