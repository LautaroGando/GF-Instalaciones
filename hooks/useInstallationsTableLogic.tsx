import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";
import IInstallation from "@/interfaces/IInstallation";
import { useInstallationsEditModal } from "@/store/Admin/AdminModals/EditModals/InstallationsEditModalStore/InstallationsEditModalStore";
import { useInstallationNoteModalStore } from "@/store/Admin/AdminModals/InstallationNoteModalStore/InstallationNoteModalStore";
import { useTextModalStore } from "@/store/Admin/AdminModals/TextModalStore/TextModalStore";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
import TInstallationStatus from "@/types/TInstallationStatus";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useInstallationsTableLogic = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const {
    selectedOrder: order,
    isLoading,
    handleFetchInstallations,
    handleDeleteInstallation,
    handleInstallationStatus,
  } = useTrackingStore();
  const { openModal: openTextModal } = useTextModalStore();
  const { openModal: openInstallationsNoteModal } = useInstallationNoteModalStore();
  const { openModal: openInstallationEditModal } = useInstallationsEditModal();
  const [isLoadingOrder, setIsLoadingOrder] = useState(true);
  const { isDark } = useThemeStore();

  useEffect(() => {
    if (orderId) {
      handleFetchInstallations(orderId);
      setTimeout(() => setIsLoadingOrder(false), 500);
    }
  }, [handleFetchInstallations, orderId]);

  const handleEdit = (installation: IInstallation) => {
    openInstallationEditModal(installation);
  };

  const handleDelete = (id: string) => {
    PersonalizedPopUp({
      color: isDark ? "#000000" : "#FAFAFA",
      withResult: true,
      title: "¿Estás seguro?",
      text: "Esta acción eliminará la instalación permanentemente.",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      titleSuccess: "Instalación eliminada",
      titleError: "Error al eliminar",
      textSuccess: "La instalación ha sido eliminada correctamente.",
      textError: "No se pudo eliminar la instalación. Intenta nuevamente.",
      genericFunction: () => handleDeleteInstallation(id),
    });
  };

  const handleCancelInstallation = (id: string, status: TInstallationStatus) => {
    PersonalizedPopUp({
      color: isDark ? "#000000" : "#FAFAFA",
      withResult: true,
      title: "¿Cancelar instalación?",
      text: "Esta acción marcará la instalación como cancelada.",
      confirmButtonText: "Sí, cancelar",
      cancelButtonText: "Volver",
      titleSuccess: "Instalación cancelada",
      titleError: "Error al cancelar",
      textSuccess: "La instalación fue cancelada correctamente.",
      textError: "No se pudo cancelar la instalación. Intenta nuevamente.",
      genericFunction: () => handleInstallationStatus(id, status),
    });
  };

  const handlePostpone = (id: string, status: TInstallationStatus) => {
    PersonalizedPopUp({
      color: isDark ? "#000000" : "#FAFAFA",
      withResult: true,
      title: "¿Posponer instalación?",
      text: "Esta acción marcará la instalación como pospuesta.",
      confirmButtonText: "Sí, Posponer",
      cancelButtonText: "Volver",
      titleSuccess: "Instalación pospuesta",
      titleError: "Error al cancelar",
      textSuccess: "La instalación fue pospuesta correctamente.",
      textError: "No se pudo posponer la instalación. Intenta nuevamente.",
      genericFunction: () => handleInstallationStatus(id, status),
    });
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
    handleCancelInstallation,
    handlePostpone,
    handleViewAddress,
    handleViewInstallers,
    handleViewNotes,
  };
};

export default useInstallationsTableLogic;
