"use client";

import { adminLabelClassName } from "@/constants/classNames";
import Select, { SingleValue } from "react-select";
import React, { useEffect, useState } from "react";
import {
  provinceOptions,
  statusOptions,
} from "@/data/AdminComponents/installationsFiltersAndOrders/installationFiltersOptions/installationFiltersOptions";
import TFiltersSelectOption from "@/data/AdminComponents/installationsFiltersAndOrders/installationFiltersOptions/types";

const InstallationsOrderAndFilter = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<SingleValue<TFiltersSelectOption>>(null);
  const [selectedProvince, setSelectedProvince] = useState<SingleValue<TFiltersSelectOption>>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex justify-between sm:gap-5 flex-wrap">
      <div className="flex flex-col lg:flex-row lg:gap-3 lg:items-center">
        <label className={adminLabelClassName}>Filtrar por:</label>

        {mounted && (
          <>
            <div className="min-w-[180px]">
              <Select
                options={statusOptions}
                placeholder="Estado"
                isClearable
                onChange={(option)=>{
                  setSelectedStatus(option);
                  console.log("ESTADO: ", selectedStatus?.value);
                }}
                classNames={{
                  control: () => "border border-gray-300 rounded-md px-2 py-1 shadow-sm",
                  option: ({ isFocused }) =>
                    isFocused ? "bg-blue-100 text-blue-900 px-2 py-1" : "px-2 py-1",
                  menu: () => "bg-white shadow-md rounded-md mt-1",
                }}
              />
            </div>

            <div className="min-w-[200px]">
              <Select
                options={provinceOptions}
                placeholder="Provincia"
                isClearable
                onChange={(option)=>{
                  setSelectedProvince(option);
                  console.log("PROVINCIA: ", selectedProvince?.value);
                }}
                classNames={{
                  control: () => "border border-gray-300 rounded-md px-2 py-1 shadow-sm",
                  option: ({ isFocused }) =>
                    isFocused ? "bg-blue-100 text-blue-900 px-2 py-1" : "px-2 py-1",
                  menu: () => "bg-white shadow-md rounded-md mt-1",
                }}
              />
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-3 lg:items-center">
        <label className={adminLabelClassName}>Ordenar por:</label>
        <select
          className="border border-gray-300 rounded-md px-2 py-1 shadow-sm max-w-[130px] truncate"
          title="Ordenar por"
        >
          <option value="createdAt-ASC">Fecha de creación (ASC)</option>
          <option value="createdAt-DESC">Fecha de creación (DESC)</option>
          <option value="progress-ASC">Progreso (ASC)</option>
          <option value="progress-DESC">Progreso (DESC)</option>
        </select>
      </div>
    </div>
  );
};

export default InstallationsOrderAndFilter;
