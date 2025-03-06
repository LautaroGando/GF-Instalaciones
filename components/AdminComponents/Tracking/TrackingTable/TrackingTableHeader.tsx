import {
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TrackingTableHeader from "./TrackingTableHeader/TackingTableHeader";
import { ordersData } from "@/data/AdminComponents/OrdersData/OrdersData";

const TrackingTable = () => {
  return (
    <div className="w-full h-[calc(100vh-354px)] min-h-[400px] overflow-x-auto">
      <table className="text-sm text-left w-full border-collapse">
        <TrackingTableHeader />
        <tbody>
          {ordersData.map((order) => (
            <tr key={order.order_id} className="border-b border-admin-borderColor">
              <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                {order.order_id}
              </td>
              <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                {order.order_name}
              </td>
              <td className="px-4 h-14 whitespace-nowrap border-y border-admin-letterColor/40">
                <button className="bg-admin-editColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-admin-editColor/80">
                  Leer Descripción
                </button>
              </td>
              <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                {order.province}
              </td>
              <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                <button className="bg-admin-editColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-admin-editColor/80">
                  Ver ID
                </button>
              </td>
              <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                {order.start_date}
              </td>
              <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                {order.end_date}
              </td>
              <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                <span className="text-admin-activeColor font-bold">{order.status}</span>
              </td>
              <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                <button className="bg-admin-editColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-admin-editColor/80">
                  Ver ID
                </button>
              </td>
              <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40">
                <button className="bg-admin-editColor h-[34px] px-5 font-bold text-letterColorLight rounded-[4px] transition-bg duration-200 hover:bg-admin-editColor/80">
                  Ver instalaciones
                </button>
              </td>
              <td className="px-4 h-12 whitespace-nowrap border-y border-admin-letterColor/40 text-center">
                <div className="flex items-center justify-start gap-4 text-base text-letterColorLight">
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
  );
};

export default TrackingTable;
