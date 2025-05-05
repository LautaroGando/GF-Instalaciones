import { useEffect, useState } from "react";
import { useTextModalStore } from "@/store/Admin/AdminModals/TextModalStore/TextModalStore";
import { useTrackingEditModal } from "@/store/Admin/AdminModals/EditModals/TrackingEditModalStore/TrackingEditModalStore";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";
import IOrder from "@/interfaces/IOrder";
import { IUser } from "@/interfaces/IUser";
import { useUserStore } from "@/store/UserStore/userStore";

export const useTrackingTableLogic = () => {
  const { openModal: openTrackingTextModal } = useTextModalStore();
  const { openModal: openTrackingEditModal } = useTrackingEditModal();
  const { handleFetchOrders, handleDeleteOrder, getFilteredOrders, isLoading } = useTrackingStore();
  const { handleFetchUsers, users } = useUserStore();
  const { isDark } = useThemeStore();
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await handleFetchUsers();
      await handleFetchOrders();
      setTimeout(() => {
        setIsLoadingOrders(false);
      }, 500);
    };
    fetchData();
  }, [handleFetchOrders, handleFetchUsers]);

  const filteredOrders = getFilteredOrders();

  const handleEditOrder = (order: IOrder) => {
    openTrackingEditModal(order);
  };

  const handleDeleteOrderClick = async (id: string) => {
    await PersonalizedPopUp({
      color: isDark ? "#000000" : "#FAFAFA",
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

  const handleViewClient = (id: string) => {
    const user: IUser | undefined = users?.find((usr) => usr.userRoles[0].id === id);

    if (user) {
      const {
        fullName,
        email,
        birthDate,
        idNumber,
        phone,
        address,
        location,
        country,
        coverage,
        isSubscribed,
        createdAt,
      } = user;

      const clientData = `
      <div style="line-height: 1.6">
        <p><strong>Nombre completo:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>DNI:</strong> ${idNumber}</p>
        <p><strong>Fecha de nacimiento:</strong> ${birthDate}</p>
        <p><strong>Teléfono:</strong> ${coverage} ${phone}</p>
        <p><strong>Dirección:</strong> ${address}, ${location}, ${country}</p>
        <p><strong>Suscripción activa:</strong> ${isSubscribed ? "Sí" : "No"}</p>
        <p><strong>Registrado el:</strong> ${createdAt}</p>
      </div>
    `;

      openTrackingTextModal("Información del cliente", clientData.trim());
    }
  };

  return {
    isLoading,
    isLoadingOrders,
    filteredOrders,
    handleEditOrder,
    handleDeleteOrderClick,
    handleOpenTextModal,
    handleViewClient,
  };
};
