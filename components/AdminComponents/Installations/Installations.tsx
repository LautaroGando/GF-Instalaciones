import OrderAndFilter from "@/components/ui/AdminComponents/OrderAndFilter/OrderAndFilter";
import Pagination from "@/components/ui/AdminComponents/Pagination/Pagination";
import {
  filterUsers,
  orderUsers,
} from "@/data/OrderAndFilter/order-and-filter";
import React, { Suspense } from "react";
import InstallationsTable from "./InstallationsTable/InstallationsTable";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";

const Instalations = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <OrderAndFilter
          filter={filterUsers}
          order={orderUsers}
          filterId="filterUsers"
          orderId="orderUsers"
        />
        <Pagination />
      </div>
      <Suspense fallback={<Loading theme="light" />}>
        <InstallationsTable />
      </Suspense>
    </div>
  );
};

export default Instalations;
