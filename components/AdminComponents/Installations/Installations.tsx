import React, { Suspense } from "react";
import InstallationsTable from "./InstallationsTable/InstallationsTable";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import InstallationsOrderAndFilter from "@/components/ui/AdminComponents/OrderAndFilterAdmin/InstallationsOrderAndFilter/InstallationsOrderAndFilter";

const Instalations = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <InstallationsOrderAndFilter />
      </div>
      <Suspense fallback={<Loading theme="light" />}>
        <InstallationsTable />
      </Suspense>
    </div>
  );
};

export default Instalations;
