import React from "react";

const TrackingOrderAndFilter = () => {
  return (
    <div className="flex justify-between sm:gap-5">
      <div className="flex flex-col lg:flex-row lg:gap-3 lg:items-center">
        <label className="text-xs sm:text-sm lg:text-base">Filtrar por:</label>
        <select className="text-letterColorLight cursor-pointer outline-none bg-primaryColor rounded-[4px] h-[40px] p-1 text-xs sm:text-sm lg:text-base">
          <option>Opción 1</option>
          <option>Opción 2</option>
        </select>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-3 lg:items-center">
        <label className="text-xs sm:text-sm lg:text-base">Ordenar por:</label>
        <select className="text-letterColorLight cursor-pointer outline-none bg-primaryColor rounded-[4px] h-[40px] p-1 text-xs sm:text-sm lg:text-base">
          <option>Opción A</option>
          <option>Opción B</option>
        </select>
      </div>
    </div>
  );
};

export default TrackingOrderAndFilter;
