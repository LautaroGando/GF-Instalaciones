import IOrder from "@/interfaces/IOrder";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

const OrderCard: React.FC<{ order: IOrder }> = ({ order }) => {
  const [completed, total] = order.installationsFinished.split("/").map(Number);
  const percentage = (completed / total) * 100;
  const isComplete = percentage === 100;
  const orderIsCompleted = order.completed;

  return (
    <Link
      href="/orders/4896314"
      title={`Ver detalles de la orden: ${order.title}`}
      aria-label={`Ver detalles de la orden: ${order.title}`}
      className="group block rounded-[8px] border border-gray-200 overflow-hidden 
                 shadow-[0_4px_4px_rgba(0,0,0,0.1)] transition-all duration-300
                 hover:shadow-lg active:scale-95 cursor-pointer"
    >
      <div
        className={clsx(
          "h-2 w-full",
          orderIsCompleted ? "bg-admin-activeColor" : "bg-primaryColor"
        )}
      />

      <div className="p-5 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span
            className={clsx(
              "font-semibold",
              orderIsCompleted ? "text-admin-activeColor" : "text-primaryColor"
            )}
          >
            {orderIsCompleted ? "Completada" : "En Proceso"}
          </span>
          <span className="text-gray-500">22/05/2026</span>
        </div>

        <div className="text-sm text-gray-600 group-hover:text-secondaryColor transition-colors duration-200 space-y-2">
          <p className="font-semibold text-base text-gray-500 truncate">{order.title}</p>
          <p className="text-xs text-gray-500" />
          <p className="text-xs text-gray-500">
            Número de Órden: <span className="font-mono">{order.orderNumber}</span>
          </p>
          <p className="text-sm line-clamp-2 text-gray-700">{order.description}</p>
        </div>

        <div className="mt-2">
          <div className="flex justify-between text-xs text-gray-500 font-medium mb-1">
            <span>Instalaciones completadas</span>
            <span>
              {completed}/{total}
            </span>
          </div>

          {!isComplete ? (
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-200 bg-admin-activeColor/70 group-hover:bg-admin-activeColor"
                style={{ width: `${percentage}%` }}
              />
            </div>
          ) : (
            <p className="mt-2 text-sm font-semibold text-admin-activeColor rounded-md py-1 w-fit">
              Instalaciones completadas al 100%
            </p>
          )}
        </div>

        <div
          className={clsx(
            "mt-2 text-right text-sm font-medium lg:opacity-50 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-200",
            orderIsCompleted ? "text-admin-activeColor" : "text-primaryColor"
          )}
        >
          Ver instalaciones →
        </div>
      </div>
    </Link>
  );
};

export default OrderCard;
