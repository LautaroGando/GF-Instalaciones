import React from "react";
import TrackingTable from "./TrackingTable/TrackingTable";
import TrackingOrderAndFilter from "@/components/ui/AdminComponents/OrderAndFilterAdmin/TrackingOrderAndFilter/TrackingOrderAndFilter";
import OrdersPagination from "@/components/ui/AdminComponents/AdminPaginationTables/OrdersPagination/OrdersPagination";

const Tracking = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <TrackingOrderAndFilter />
        <OrdersPagination/>
      </div>
      <TrackingTable />
    </div>
  );
};

export default Tracking;
