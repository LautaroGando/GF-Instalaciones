"use client";

import React, { useEffect, useState } from "react";
import InstallationsTableHeader from "./InstallationsTableHeader/InstallationsTableHeader";
import IInstallation from "@/interfaces/IInstallation";
import CreateButton from "@/components/ui/AdminComponents/CreateButton/CreateButton";
import { useSearchParams } from "next/navigation";
import IOrder from "@/interfaces/IOrder";
import RenderEmptyState from "@/components/ui/AdminComponents/RenderEmptyState/RenderEmptyState";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import InstallationRow from "./InstallationRow/InstallationRow";
import { useTextModalStore } from "@/store/Admin/AdminModals/TextModalStore/TextModalStore";
import { useInstallationsEditModal } from "@/store/Admin/AdminModals/EditModals/InstallationsEditModalStore/InstallationsEditModalStore";
import Swal from "sweetalert2";

const InstallationsTable = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { orders, isLoading, handleFetchOrders, handleDeleteInstallation } = useTrackingStore();
  const { openModal: openTextModal } = useTextModalStore();
  const { openModal: openInstallationEditModal } = useInstallationsEditModal();
  const [order, setOrder] = useState<IOrder | undefined>();
  const [isLoadingOrder, setIsLoadingOrder] = useState(true);

  useEffect(() => {
    handleFetchOrders();
  }, [handleFetchOrders]);

  useEffect(() => {
    if (orderId && orders.length) {
      const foundOrder = orders.find((ord) => ord.id === orderId);
      setOrder(foundOrder);
      setTimeout(() => setIsLoadingOrder(false), 500);
    }
  }, [orderId, orders]);

  const handleEdit = (installation: IInstallation) => {
    openInstallationEditModal(installation);
  };

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará la instalación permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    try {
      await handleDeleteInstallation(id);

      Swal.fire({
        icon: "success",
        title: "Instalación eliminada",
        text: "La instalación ha sido eliminada correctamente.",
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "No se pudo eliminar la instalación. Intenta nuevamente.";

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

  const handleViewAddress = (installation: IInstallation) => {
    const {
      street,
      number,
      note,
      postalCode,
      city: {
        name: cityName,
        province: { name: provinceName },
      },
    } = installation.address;

    const address = `
      <strong>Calle:</strong> ${street} ${number}<br/>
      <strong>Ciudad:</strong> ${cityName}<br/>
      <strong>Provincia:</strong> ${provinceName}<br/>
      <strong>Código Postal:</strong> ${postalCode}<br/>
      <strong>Nota:</strong> ${note}
    `;

    openTextModal("Dirección", address.trim());
  };

  const handleViewNotes = (installation: IInstallation) => {
    openTextModal("Notas", installation.notes || "Sin notas");
  };

  if (isLoading || isLoadingOrder) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loading theme="light" />
      </div>
    );
  }

  if (!order) {
    return <RenderEmptyState title="No se encontró la orden seleccionada." />;
  }

  if (!order.installations || order.installations.length === 0) {
    return <RenderEmptyState title="Esta orden no tiene instalaciones asignadas." />;
  }

  return (
    <>
      <div className="w-full h-[max-content] min-h-[400px] overflow-x-auto">
        <table className="text-sm text-left w-full border-collapse">
          <InstallationsTableHeader />
          <tbody>
            {order.installations.map((installation: IInstallation, i) => (
              // const coordinatorName = installation.coordinator?.name || "Sin nombre";

              <InstallationRow
                key={i}
                installation={installation}
                coordinator={installation.coordinator}
                onEdit={() => handleEdit(installation)}
                onDelete={() => handleDelete(installation.id)}
                onViewAddress={() => handleViewAddress(installation)}
                onViewNotes={() => handleViewNotes(installation)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <CreateButton />
    </>
  );
};

export default InstallationsTable;
