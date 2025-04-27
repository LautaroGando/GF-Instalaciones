import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import OrderCardContainer from "../OrderCardContainer/OrderCardContainer";
import { ClientOrdersContentProps } from "./types";

const ClientOrdersContent: React.FC<ClientOrdersContentProps> = ({
  orders,
  isLoading,
  isLoadingOrders,
}) => {
  if (isLoading || isLoadingOrders) {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <Loading theme="light" />
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] text-center gap-3">
        <h2 className="text-xl font-semibold text-primaryColor">No hay órdenes activas</h2>
        <p className="text-gray-500 text-sm max-w-[300px]">
          Aún no tenés órdenes asignadas o en proceso. Vuelve más tarde o contacta al coordinador.
        </p>
      </div>
    );
  }

  return <OrderCardContainer orders={orders} />;
};

export default ClientOrdersContent;
