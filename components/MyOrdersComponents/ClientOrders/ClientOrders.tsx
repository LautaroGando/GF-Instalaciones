"use client";
import React, { useEffect, useState } from "react";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import ClientOrdersHeader from "./ClientOrdersHeader/ClientOrdersHeader";
import ClientOrdersContent from "./ClientOrdersContent/ClientOrdersContent";

const ClientOrders = () => {
  const { orders, handleFetchOrders, isLoading } = useTrackingStore();
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);
  const [contentToShow, setContentToShow] = useState<"in process" | "completed">("in process");

  useEffect(() => {
    const fetchData = async () => {
      await handleFetchOrders(
        contentToShow === "in process"
          ? { progress: "DESC", completed: false }
          : { completed: true }
      );
      setTimeout(() => setIsLoadingOrders(false), 500);
    };
    fetchData();
  }, [handleFetchOrders, contentToShow]);

  const handleContentToShow = (value: "in process" | "completed") => {
    setContentToShow(value);
  };
  let orderCount = 0;
  if (!isLoading) {
    orderCount = orders.length;
  }

  return (
    <div className="mb-16 md:max-w-[780px] md:mx-auto xl:max-w-none">
      <ClientOrdersHeader
        orderCount={orderCount}
        contentToShow={contentToShow}
        onViewChange={handleContentToShow}
      />

      {contentToShow === "in process" ? (
        <ClientOrdersContent
          orders={orders}
          isLoading={isLoading}
          isLoadingOrders={isLoadingOrders}
        />
      ) : (
        <ClientOrdersContent
          orders={orders}
          isLoading={isLoading}
          isLoadingOrders={isLoadingOrders}
        />
      )}
    </div>
  );
};

export default ClientOrders;
