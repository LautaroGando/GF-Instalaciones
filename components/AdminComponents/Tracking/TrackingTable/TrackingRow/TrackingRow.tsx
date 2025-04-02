import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ITrackingRowsProps from "./types";
import Link from "next/link";

const TrackingRow: React.FC<ITrackingRowsProps> = ({
  order,
  editOrder,
  deleteOrder,
  openTextModal,
}) => {
  return (
    <tr className="border-b border-admin-borderColor">
      <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
        {order.orderNumber}
      </td>
      <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
        {order.title}
      </td>
      <td className="px-4 h-14 whitespace-nowrap border-y border-admin-letterColor/40">
        <button
          onClick={() => openTextModal()}
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
          <span className="text-admin-activeColor font-bold">Completada</span>
        ) : (
          <span className="text-admin-inProccess font-bold">{order.installationsFinished}</span>
        )}
      </td>

      <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
        <Link href={`/admin/tracking/installations?orderId=${order.id}`}>
          <button className="bg-primaryColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-primaryColorHover">
            Ver instalaciones
          </button>
        </Link>
      </td>
      <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40 text-center">
        <div className="flex items-center justify-start gap-4 text-base text-letterColorLight">
          <button onClick={() => editOrder()} className="bg-admin-editColor w-8 h-8 rounded-[3px]">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button
            onClick={() => deleteOrder()}
            className="bg-admin-inactiveColor w-8 h-8 rounded-[3px]"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TrackingRow;
