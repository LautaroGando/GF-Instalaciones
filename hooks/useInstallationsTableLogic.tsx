import IInstallation from "@/interfaces/IInstallation";
import { useInstallationsEditModal } from "@/store/Admin/AdminModals/EditModals/InstallationsEditModalStore/InstallationsEditModalStore";
import { useInstallationNoteModalStore } from "@/store/Admin/AdminModals/InstallationNoteModalStore/InstallationNoteModalStore";
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
  const { openModal: openInstallationsNoteModal } = useInstallationNoteModalStore();
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
    const { street, number, note, postalCode, city } = installation.address;

    const address = `
      <strong>Calle:</strong> ${street} ${number}<br/>
      <strong>Ciudad:</strong> ${city.name}<br/>
      <strong>Provincia:</strong> ${city.province.name}<br/>
      <strong>Código Postal:</strong> ${postalCode}<br/>
      <strong>Nota:</strong> ${note}
    `;

    openTextModal("Dirección", address.trim());
  };

  const handleViewInstallers = (installation: IInstallation) => {
    const installationInstallers = installation.installers
      .map((inst) => `<strong>Instalador:</strong> ${inst.user.fullName}<br/>`)
      .join("");

    openTextModal("Instaladores", installationInstallers || "Sin Instalador");
  };

  const handleViewNotes = (installation: IInstallation, text: string, images: string[]) => {
    openInstallationsNoteModal({
      installation,
      title: "Notas",
      text: text || "Sin notas",
      images,
    });
  };

  return {
    order,
    isLoading: isLoading || isLoadingOrder,
    handleEdit,
    handleDelete,
    handleViewAddress,
    handleViewInstallers,
    handleViewNotes,
  };
};

export default useInstallationsTableLogic;
