import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import OrderCardContainer from "../OrderCardContainer/OrderCardContainer";
import { ClientOrdersContentProps } from "./types";
import ClientEmptyState from "@/components/ui/MyOrdersComponents/ClientEmptyState/ClientEmptyState";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

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
      <ClientEmptyState
        icon={faCircleInfo}
        title="No hay órdenes activas"
        description="Aún no tenés órdenes asignadas o en proceso. Vuelve más tarde o contacta al coordinador."
      />
    );
  }

  return <OrderCardContainer orders={orders} />;
};

export default ClientOrdersContent;
