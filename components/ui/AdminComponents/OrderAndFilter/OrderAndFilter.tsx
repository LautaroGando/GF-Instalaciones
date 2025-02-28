import { IFilter, IOrder } from "@/data/OrderAndFilter/types";
import React from "react";
import { IOrderAndFilterProps } from "./types";
import { useUserStore } from "@/store/UserStore/userStore";

export const OrderAndFilter: React.FC<IOrderAndFilterProps> = ({
  filter,
  order,
  filterId,
  orderId,
}) => {
  const { handleFilterUsers, handleOrderUsers } = useUserStore();

  return (
    <div className="flex justify-between sm:gap-5">
      <div className="flex flex-col lg:flex-row lg:gap-3 lg:items-center">
        <label className="text-xs sm:text-sm lg:text-base" htmlFor={filterId}>
          Filtrar por:
        </label>
        <select
          onChange={handleFilterUsers}
          className="text-letterColorLight cursor-pointer outline-none bg-primaryColor rounded-[4px] h-[40px] p-1 text-xs sm:text-sm lg:text-base"
          name={filterId}
          id={filterId}
        >
          {filter.map((item: IFilter, i: number) => (
            <option key={i} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-3 lg:items-center">
        <label className="text-xs sm:text-sm lg:text-base" htmlFor={orderId}>
          Ordenar por:
        </label>
        <select
          onChange={handleOrderUsers}
          className="text-letterColorLight cursor-pointer outline-none bg-primaryColor rounded-[4px] h-[40px] p-1 text-xs sm:text-sm lg:text-base"
          name={orderId}
          id={orderId}
        >
          {order.map((item: IOrder, i: number) => (
            <option key={i} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default OrderAndFilter;
