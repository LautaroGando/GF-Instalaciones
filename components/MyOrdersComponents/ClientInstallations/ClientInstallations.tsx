"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import ClientInstallationsHeader from "./ClientInstallationsHeader/ClientInstallationsHeader";
import InstallationCardList from "./InstallationCardList/InstallationCardList";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import { faCircleExclamation, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import ClientEmptyState from "@/components/ui/MyOrdersComponents/ClientEmptyState/ClientEmptyState";

const ClientInstallations = () => {
  const { orderId } = useParams() as { orderId: string };
  const { handleFetchInstallations, selectedOrder: order, isLoading } = useTrackingStore();
  const [isLoadingInstallations, setIsLoadingInstallations] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (orderId) {
        await handleFetchInstallations(orderId);
      }
      setTimeout(() => setIsLoadingInstallations(false), 500);
    };

    fetchData();
  }, [orderId, handleFetchInstallations]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  });

  if (isLoading || isLoadingInstallations) {
    return (
      <div className="mb-5 py-5 flex items-center justify-center min-h-[600px]">
        <Loading theme="light" />
      </div>
    );
  }

  if (!order) {
    return (
      <ClientEmptyState
        icon={faCircleExclamation}
        title="Orden no encontrada"
        description="No pudimos encontrar una orden con el ID proporcionado. Verifica el enlace o vuelve a intentar."
        showBackButton
      />
    );
  }

  if (order.installationsFinished === "0/0") {
    return (
      <ClientEmptyState
        icon={faCircleInfo}
        title="Aún no hay instalaciones asignadas"
        description="Esta orden fue registrada, pero todavía no se asignaron instalaciones. Por favor, revisa
          más adelante."
        showBackButton
      />
    );
  }

  return (
    <div className="max-w-[920px] mx-auto">
      <ClientInstallationsHeader order={order} />
      <InstallationCardList order={order} />
    </div>
  );
};

export default ClientInstallations;
