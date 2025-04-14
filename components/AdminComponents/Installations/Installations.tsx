import React, { Suspense } from "react";
import InstallationsTable from "./InstallationsTable/InstallationsTable";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import InstallationsOrderAndFilter from "@/components/ui/AdminComponents/OrderAndFilterAdmin/InstallationsOrderAndFilter/InstallationsOrderAndFilter";
import InstallationsPagination from "@/components/ui/AdminComponents/AdminPaginationTables/InstallationsPagination/InstallationsPagination";

const Instalations = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <InstallationsOrderAndFilter />
        <InstallationsPagination/>
      </div>
      <Suspense fallback={<Loading theme="light" />}>
        <InstallationsTable />
      </Suspense>
    </div>
  );
};

export default Instalations;
