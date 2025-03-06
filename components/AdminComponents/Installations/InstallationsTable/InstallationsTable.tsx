"use client";

import { faBoxOpen, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import InstallationsTableHeader from "./InstallationsTableHeader/InstallationsTableHeader";
import IInstallation from "@/interfaces/IInstallation";
import clsx from "clsx";
import ordersData from "@/data/AdminComponents/OrdersData/OrdersData";
import CreateButton from "@/components/ui/AdminComponents/CreateButton/CreateButton";
import { useSearchParams } from "next/navigation";
import IOrder from "@/interfaces/IOrder";

const InstallationsTable = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState<IOrder | undefined>();

  useEffect(() => {
    if (orderId) {
      const foundOrder: IOrder | undefined = ordersData.find((ord) => ord.id === orderId);
      setOrder(foundOrder);
    }
  }, [orderId]);

  if (!order)
    return (
      <div className="flex flex-col items-center justify-center h-[300px] text-center text-gray-600">
        <FontAwesomeIcon icon={faBoxOpen} className="text-6xl text-gray-400 mb-4" />
        <p className="text-lg font-semibold">No hay instalaciones para esta orden.</p>
        <p className="text-sm text-gray-500">Intenta con otro filtro o revisa más tarde.</p>
      </div>
    );

  return (
    <>
      <div className="w-full h-[calc(100vh-354px)] min-h-[400px] overflow-x-auto">
        <table className="text-sm text-left w-full border-collapse">
          <InstallationsTableHeader />
          <tbody>
            {order.installations.map((installation: IInstallation, index: number) => (
              <tr key={index} className="border-b border-admin-borderColor">
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  {installation.id}
                </td>
                <td className="px-4 h-14 whitespace-nowrap border-y border-admin-letterColor/40">
                  {installation.address.street}
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  {installation.address.postalCode}
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  <button className="bg-admin-editColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-admin-editColor/80">
                    Leer nota
                  </button>
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  {installation.address.postalCode}
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  {installation.address.city}
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  {installation.address.province}
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                  {installation.startDate}
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
                  <button className="bg-admin-editColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-admin-editColor/80">
                    Ver Notas
                  </button>
                </td>
                <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40 text-center">
                  <div className="flex items-center justify-center gap-2 text-base text-letterColorLight">
                    <button className="bg-admin-editColor w-8 h-8 rounded-[3px]">
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

export default InstallationsTable;
