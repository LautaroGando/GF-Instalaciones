import { numberToText } from "@/utils/numberToText";
import React from "react";
import IClientOrdersHeaderProps from "./types";
import clsx from "clsx";

const ClientOrdersHeader: React.FC<IClientOrdersHeaderProps> = ({
  orderCount,
  contentToShow,
  onViewChange,
}) => {
  const orderText = numberToText(orderCount);
  const isCompleted = contentToShow === "completed";
  const textToShow = isCompleted ? "órdenes completadas" : "órdenes en proceso";

  return (
    <section className="xl:w-[780px] xl:mx-auto">
      <h2 className="text-primaryColor text-[24px] text-center sm:text-[28px] md:text-[32px]">
        MIS ORDENES
      </h2>

      <div className="flex items-start justify-center mt-2 mb-8 h-[45px] sm:h-[52px] md:mt-7 md:mb-12">
        <button
          onClick={() => onViewChange("in process")}
          className={clsx(
            "w-[50%] h-full flex items-center justify-center font-semibold transition-colors duration-300",
            contentToShow === "in process"
              ? "bg-primaryColor/20 border-b border-primaryColor text-primaryColor"
              : "text-gray-400 hover:text-primaryColor"
          )}
        >
          Órdenes
        </button>
        <button
          onClick={() => onViewChange("completed")}
          className={clsx(
            "w-[50%] h-full flex items-center justify-center font-medium transition-colors duration-300",
            contentToShow === "completed"
              ? "bg-admin-activeColor/20 border-b border-admin-activeColor text-admin-activeColor"
              : "text-gray-400 hover:text-admin-activeColor"
          )}
        >
          Historial
        </button>
      </div>

      <p className="text-base text-center text-gray-500 font-medium tracking-[0.1em] mb-6">
        {textToShow}:{" "}
        <span
          className={clsx(
            "font-bold underline",
            isCompleted ? "text-admin-activeColor" : "text-primaryColor"
          )}
        >
          {orderCount}
        </span>{" "}
        ({orderText})
      </p>
    </section>
  );
};

export default ClientOrdersHeader;
