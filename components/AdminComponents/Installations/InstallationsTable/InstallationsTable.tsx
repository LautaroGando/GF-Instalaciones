"use client";

import { faBoxOpen, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import InstallationsTableHeader from "./InstallationsTableHeader/InstallationsTableHeader";
import IInstallation from "@/interfaces/IInstallation";
import clsx from "clsx";
import CreateButton from "@/components/ui/AdminComponents/CreateButton/CreateButton";
import { useSearchParams } from "next/navigation";
import IOrder from "@/interfaces/IOrder";
import { useTextModalStore } from "@/store/Admin/AdminModals/TextModalStore/TextModalStore";
import EmptyState from "@/components/ui/AdminComponents/EmptyState/EmptyState";
import { useInstallationsEditModal } from "@/store/Admin/AdminModals/EditModals/InstallationsEditModalStore/InstallationsEditModalStore";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";

const InstallationsTable = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { openModal: openTextModal } = useTextModalStore();
  const { openModal: openInstallationEditModal } = useInstallationsEditModal();
  const { orders, handleFetchOrders, isLoading } = useTrackingStore();
  const [order, setOrder] = useState<IOrder | undefined>();
  const [isLoadingOrder, setIsLoadingOrder] = useState(true);

  useEffect(() => {
    handleFetchOrders();
  }, [handleFetchOrders]);

  useEffect(() => {
    if (orderId && orders.length) {
      const foundOrder = orders.find((ord) => ord.id === orderId);
      setOrder(foundOrder);

      setTimeout(() => {
        setIsLoadingOrder(false);
      }, 500);
    }
  }, [orderId, orders]);

  if (isLoading || isLoadingOrder) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loading theme="light" />
      </div>
    );
  }

  if (!order) {
    return <EmptyState icon={faBoxOpen} title="No se encontró la orden seleccionada." />;
  }

  if (!order.instalations || order.instalations.length === 0) {
    return (
      <div>
        <div className="h-[220px]">
        <EmptyState icon={faBoxOpen} title="Esta orden no tiene instalaciones asignadas." />
        </div>
        <div className="mx-auto max-w-[166px]">
          <CreateButton />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-[max-content] min-h-[400px] overflow-x-auto">
        <table className="text-sm text-left w-full border-collapse">
          <InstallationsTableHeader />
          <tbody>
            {order.instalations.map((installation: IInstallation, index: number) => (
              <tr key={index} className="border-b border-admin-borderColor">
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  {installation.startDate ? installation.startDate : "-"}
                </td>
                <td className="px-4 h-14 whitespace-nowrap border-y border-admin-letterColor/40">
                  {installation.endDate ? installation.endDate : "-"}
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  <span
                    className={clsx(
                      "font-bold",
                      installation.status === "Pendiente" || installation.status === "En proceso"
                        ? "text-primaryColor"
                        : installation.status === "A revisar"
                        ? "text-admin-editColor"
                        : installation.status === "Pospuesta" || installation.status === "Cancelada"
                        ? "text-admin-inactiveColor"
                        : "text-admin-activeColor"
                    )}
                  >
                    {installation.status}
                  </span>
                </td>

                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  <button
                    onClick={() => openTextModal("Notas", "Algunas notas de la instalacion")}
                    className="bg-primaryColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-primaryColorHover"
                  >
                    Ver Notas
                  </button>
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  <div className="flex items-center gap-2 text-base text-letterColorLight">
                    <button className="bg-admin-editColor w-8 h-8 rounded-[3px]">
                      <FontAwesomeIcon
                        onClick={() => openInstallationEditModal(installation)}
                        icon={faPenToSquare}
                      />
                    </button>
                    <button className="bg-admin-inactiveColor w-8 h-8 rounded-[3px]">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreateButton />
    </>
  );
};

export default InstallationsTable;
