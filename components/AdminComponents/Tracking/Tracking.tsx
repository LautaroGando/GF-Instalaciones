import OrderAndFilter from "@/components/ui/AdminComponents/OrderAndFilter/OrderAndFilter";
import Pagination from "@/components/ui/AdminComponents/Pagination/Pagination";
import React from "react";
import { filterUsers, orderUsers } from "@/data/OrderAndFilter/order-and-filter";
import TrackingTable from "./TrackingTable/TrackingTable";

const Tracking = () => {
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
      <TrackingTable />
    </div>
  );
};

export default Tracking;
