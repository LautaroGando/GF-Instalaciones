"use client";

import {
  faBoxOpen,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import TrackingTableHeader from "./TrackingTableHeader/TackingTableHeader";
import Link from "next/link";
import CreateButton from "@/components/ui/AdminComponents/CreateButton/CreateButton";
import { useTextModalStore } from "@/store/Admin/AdminModals/TextModalStore/TextModalStore";
import EmptyState from "@/components/ui/AdminComponents/EmptyState/EmptyState";
import { useTrackingEditModal } from "@/store/Admin/AdminModals/EditModals/TrackingEditModalStore/TrackingEditModalStore";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";

const TrackingTable = () => {
  const { openModal: openTrackingCreateModal } = useTextModalStore();
  const { openModal: openTrackingEditModal } = useTrackingEditModal();
  const { orders, handleFetchOrders, isLoading } = useTrackingStore();
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
      <div className="flex items-center justify-center min-h-[400px]">
        <Loading theme="light" />
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div>
        <div className="h-[220px]">
          <EmptyState
            icon={faBoxOpen}
            title="No hay órdenes registradas"
            text="Aún no se han añadido órdenes. Intenta más tarde."
          />
        </div>
        <div className="mx-auto max-w-[200px]">
          <CreateButton />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-[max-content] min-h-[400px] overflow-x-auto">
        <table className="text-sm text-left w-full border-collapse">
          <TrackingTableHeader />
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-admin-borderColor">
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  {order.orderNumber}
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  {order.title}
                </td>
                <td className="px-4 h-14 whitespace-nowrap border-y border-admin-letterColor/40">
                  <button
                    onClick={() =>
                      openTrackingCreateModal(
                        "Descripción de la Orden",
                        order.description
                      )
                    }
                    className="bg-primaryColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-primaryColorHover"
                  >
                    Leer Descripción
                  </button>
                </td>

                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  12/03/2025
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  {order.endDate ? order.endDate : "-"}
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  {order.completed ? (
                    <span className="text-admin-activeColor font-bold">
                      Completada
                    </span>
                  ) : (
                    <span className="text-admin-inProccess font-bold">
                      {order.instalationsFinished}
                    </span>
                  )}
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  <Link
                    href={`/admin/tracking/installations?orderId=${order.id}`}
                  >
                    <button className="bg-primaryColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-primaryColorHover">
                      Ver instalaciones
                    </button>
                  </Link>
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40 text-center">
                  <div className="flex items-center justify-start gap-4 text-base text-letterColorLight">
                    <button
                      onClick={() => openTrackingEditModal(order)}
                      className="bg-admin-editColor w-8 h-8 rounded-[3px]"
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
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

export default TrackingTable;
