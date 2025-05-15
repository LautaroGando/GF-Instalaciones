import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useUserStore } from "@/store/UserStore/userStore";
import { useEffect, useMemo, useState } from "react";

export const useClientOrders = (contentToShow: "in process" | "completed") => {
  const { orders, handleFetchOrders, handleFetchAllOrders, isLoading, ordersTotalPages } =
    useTrackingStore();
  const { user } = useUserStore();
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);

  const clientOrders = useMemo(() => {
    if (!user) return [];
    return orders.filter((order) => order.client.id === user.id);
  }, [orders, user]);

  const pendingCount = clientOrders.filter((order) => !order.completed).length;
  const completedCount = clientOrders.filter((order) => order.completed).length;
  const finalCount = contentToShow === "completed" ? completedCount : pendingCount;

  useEffect(() => {
    const fetchData = async () => {
      await handleFetchAllOrders();
      await handleFetchOrders(
        contentToShow === "in process" ? { completed: false } : { completed: true }
      );
      setIsLoadingOrders(false);
    };
    fetchData();
  }, [contentToShow, handleFetchOrders, handleFetchAllOrders]);

  return {
    clientOrders,
    pendingCount,
    completedCount,
    finalCount,
    isLoading,
    isLoadingOrders,
    ordersTotalPages,
  };
};
