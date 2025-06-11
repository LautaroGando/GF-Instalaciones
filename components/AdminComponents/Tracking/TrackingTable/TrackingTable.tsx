"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import TrackingTableHeader from "./TrackingTableHeader/TackingTableHeader";
import TrackingRow from "./TrackingRow/TrackingRow";
import CreateButton from "@/components/ui/AdminComponents/CreateButton/CreateButton";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import RenderEmptyState from "@/components/ui/AdminComponents/RenderEmptyState/RenderEmptyState";
import { useTrackingTableLogic } from "@/hooks/useTrackingTableLogic";

const TrackingTable = () => {
  const {
    isLoading,
    isLoadingOrders,
    filteredOrders,
    handleEditOrder,
    handleDeleteOrderClick,
    handleOpenTextModal,
    handleViewClient,
  } = useTrackingTableLogic();

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

  return (
    <>
      <div className="w-full h-max min-h-[610px] overflow-x-auto overflow-y-hidden">
        <table className="text-sm text-left w-full border-collapse">
          <TrackingTableHeader />
          <AnimatePresence mode="popLayout">
            <tbody>
              {filteredOrders.map((order) => {
                return (
                  <TrackingRow
                    key={order.id}
                    order={order}
                    editOrder={() => handleEditOrder(order)}
                    deleteOrder={() => handleDeleteOrderClick(order.id)}
                    descriptionModal={() =>
                      handleOpenTextModal(
                        "Descripción de la Orden",
                        order.description
                      )
                    }
                    clientInfoModal={() => handleViewClient(order.client.user)}
                  />
                );
              })}
            </tbody>
          </AnimatePresence>
        </table>
      </div>
      <CreateButton />
    </>
  );
};

export default TrackingTable;
