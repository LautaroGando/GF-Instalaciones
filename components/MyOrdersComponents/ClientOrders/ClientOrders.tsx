"use client";
import { useState } from "react";
import { useClientOrders } from "@/hooks/useClientOrders";
import ClientOrdersHeader from "./ClientOrdersHeader/ClientOrdersHeader";
import ClientOrdersContent from "./ClientOrdersContent/ClientOrdersContent";
import OrdersPagination from "@/components/ui/AdminComponents/AdminPaginationTables/OrdersPagination/OrdersPagination";

const ClientOrders = () => {
  const [contentToShow, setContentToShow] = useState<"in process" | "completed">("in process");
  const { clientOrders, finalCount, isLoading, isLoadingOrders, ordersTotalPages } =
    useClientOrders(contentToShow);

  return (
    <div className="mb-5 py-5 md:max-w-[780px] md:mx-auto xl:max-w-none">
      <ClientOrdersHeader
        finalCount={finalCount}
        contentToShow={contentToShow}
        onViewChange={setContentToShow}
      />

      {ordersTotalPages > 1 && (
        <div className="w-[99%] mx-auto">
          <OrdersPagination />
        </div>
      )}

      <ClientOrdersContent
        orders={clientOrders}
        isLoading={isLoading}
        isLoadingOrders={isLoadingOrders}
      />
    </div>
  );
};

export default ClientOrders;
