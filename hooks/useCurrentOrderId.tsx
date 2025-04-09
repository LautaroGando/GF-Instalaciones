import { useSearchParams } from "next/navigation";

export const useCurrentOrderId = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return orderId;
};

export default useCurrentOrderId;
