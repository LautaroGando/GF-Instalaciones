import IInstallation from "@/interfaces/IInstallation";
import { useInstallationsEditModal } from "@/store/Admin/AdminModals/EditModals/InstallationsEditModalStore/InstallationsEditModalStore";
import { useTextModalStore } from "@/store/Admin/AdminModals/TextModalStore/TextModalStore";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const useInstallationsTableLogic = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const {
    selectedOrder: order,
    isLoading,
    handleFetchInstallations,
    handleDeleteInstallation,
  } = useTrackingStore();
  const { openModal: openTextModal } = useTextModalStore();
  const { openModal: openInstallationEditModal } = useInstallationsEditModal();
  const [isLoadingOrder, setIsLoadingOrder] = useState(true);

  useEffect(() => {
    if (orderId) {
      handleFetchInstallations(orderId);
      setTimeout(() => setIsLoadingOrder(false), 500);
    }
  }, [handleFetchInstallations, orderId]);

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
    const { street, number, note, postalCode, city, province } = installation.address;

    const address = `
      <strong>Calle:</strong> ${street} ${number}<br/>
      <strong>Ciudad:</strong> ${city}<br/>
      <strong>Provincia:</strong> ${province}<br/>
      <strong>Código Postal:</strong> ${postalCode}<br/>
      <strong>Nota:</strong> ${note}
    `;

    openTextModal("Dirección", address.trim());
  };

  const handleViewNotes = (installation: IInstallation) => {
    openTextModal("Notas", installation.notes || "Sin notas");
  };

  return {
    order,
    isLoading: isLoading || isLoadingOrder,
    handleEdit,
    handleDelete,
    handleViewAddress,
    handleViewNotes,
  };
};

export default useInstallationsTableLogic;
