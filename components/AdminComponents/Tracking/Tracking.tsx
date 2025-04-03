import Pagination from "@/components/ui/AdminComponents/Pagination/Pagination";
import React from "react";
import TrackingTable from "./TrackingTable/TrackingTable";
import TrackingOrderAndFilter from "@/components/ui/AdminComponents/OrderAndFilterAdmin/TrackingOrderAndFilter/TrackingOrderAndFilter";

const Tracking = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <TrackingOrderAndFilter />
        <Pagination />
      </div>
      <TrackingTable />
    </div>
  );
};

export default Tracking;
