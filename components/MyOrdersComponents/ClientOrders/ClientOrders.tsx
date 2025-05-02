"use client";
import React, { useEffect, useState } from "react";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import ClientOrdersHeader from "./ClientOrdersHeader/ClientOrdersHeader";
import ClientOrdersContent from "./ClientOrdersContent/ClientOrdersContent";
import OrdersPagination from "@/components/ui/AdminComponents/AdminPaginationTables/OrdersPagination/OrdersPagination";

const ClientOrders = () => {
  const {
    orders,
    handleFetchOrders,
    isLoading,
    handleFetchAllOrders,
    allOrders,
    ordersTotalPages,
  } = useTrackingStore();
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);
  const [contentToShow, setContentToShow] = useState<"in process" | "completed">("in process");
  const [lastStableCount, setLastStableCount] = useState(0);

  let pendindOrdersCount = 0;
  let completedOrdersCount = 0;
  let finalCount = 0;
  if (!isLoading) {
    pendindOrdersCount = allOrders.filter((order) => !order.completed).length;
    completedOrdersCount = allOrders.filter((order) => order.completed).length;
    finalCount = contentToShow === "completed" ? completedOrdersCount : pendindOrdersCount;
  }

  useEffect(() => {
    if (!isLoading && finalCount > 0) {
      setLastStableCount(finalCount);
    }
  }, [finalCount, isLoading]);

  useEffect(() => {
    const fetchData = async () => {
      await handleFetchAllOrders();
      await handleFetchOrders(
        contentToShow === "in process"
          ? { progress: "DESC", completed: false }
          : { completed: true }
      );
      setTimeout(() => setIsLoadingOrders(false), 500);
    };
    fetchData();
  }, [handleFetchOrders, handleFetchAllOrders, contentToShow]);

  const handleContentToShow = (value: "in process" | "completed") => {
    setContentToShow(value);
  };

  return (
    <div className="mb-5 py-5 md:max-w-[780px] md:mx-auto xl:max-w-none">
      <ClientOrdersHeader
        finalCount={lastStableCount}
        contentToShow={contentToShow}
        onViewChange={handleContentToShow}
      />

      {contentToShow === "in process" ? (
        <>
          {ordersTotalPages > 1 && (
            <div className="w-[99%] mx-auto">
              <OrdersPagination />
            </div>
          )}
          <ClientOrdersContent
            orders={orders}
            isLoading={isLoading}
            isLoadingOrders={isLoadingOrders}
          />
        </>
      ) : (
        <>
          {ordersTotalPages > 1 && (
            <div className="w-[98%] mx-auto">
              <OrdersPagination />
            </div>
          )}
          <ClientOrdersContent
            orders={orders}
            isLoading={isLoading}
            isLoadingOrders={isLoadingOrders}
          />
        </>
      )}
    </div>
  );
};

export default ClientOrders;
