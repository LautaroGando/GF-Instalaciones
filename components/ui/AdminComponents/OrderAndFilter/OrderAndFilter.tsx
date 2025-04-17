"use client";

import React, { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";
import { IFilter, IOrder } from "@/data/OrderAndFilter/types";
import { IOrderAndFilterProps } from "./types";
import { useUserStore } from "@/store/UserStore/userStore";

export const OrderAndFilter: React.FC<IOrderAndFilterProps> = ({ filter, order }) => {
  const { handleFilterUsers, handleOrderUsers } = useUserStore();

  const [selectedFilter, setSelectedFilter] = useState<SingleValue<IFilter>>(null);
  const [selectedOrder, setSelectedOrder] = useState<SingleValue<IOrder>>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-between flex-wrap gap-2 sm:gap-5 z-50">
      <div className="flex flex-col w-full gap-2 sm:w-max lg:flex-row lg:gap-3 lg:items-center">
        <label className="text-xs sm:text-sm lg:text-base">Filtrar por:</label>
        <div className="min-w-[180px]">
          <Select
            options={filter}
            placeholder="Seleccionar filtro"
            isClearable
            instanceId="filter-select"
            value={selectedFilter}
            onChange={(option) => {
              setSelectedFilter(option);
              handleFilterUsers(option?.value || "");
            }}
            classNames={{
              control: () => "border border-gray-300 rounded-md px-2 py-1 shadow-sm",
              option: ({ isFocused }) =>
                isFocused ? "bg-blue-100 text-blue-900 px-2 py-1" : "px-2 py-1",
              menu: () => "bg-white shadow-md rounded-md mt-1",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col w-full gap-2 sm:w-max lg:flex-row lg:gap-3 lg:items-center">
        <label className="text-xs sm:text-sm lg:text-base">Ordenar por:</label>
        <div className="min-w-[200px]">
          <Select
            options={order}
            placeholder="Seleccionar orden"
            isClearable
            instanceId="order-select"
            value={selectedOrder}
            onChange={(option) => {
              setSelectedOrder(option);
              handleOrderUsers(option?.value || "");
            }}
            classNames={{
              control: () => "border border-gray-300 rounded-md px-2 py-1 shadow-sm",
              option: ({ isFocused }) =>
                isFocused ? "bg-blue-100 text-blue-900 px-2 py-1" : "px-2 py-1",
              menu: () => "bg-white shadow-md rounded-md mt-1",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderAndFilter;
