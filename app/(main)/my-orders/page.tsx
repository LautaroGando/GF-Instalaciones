import ClientOrders from "@/components/MyOrdersComponents/ClientOrders/ClientOrders";

export const metadata = {
  title: "Mis Órdenes | GF Instalaciones",
  description:
    "Consulta y gestiona el historial de tus órdenes con GF Instalaciones. Accede a detalles de pedidos, estados y seguimiento de tus instalaciones.",
  keywords: [
    "mis órdenes",
    "historial de pedidos",
    "seguimiento de instalaciones",
    "GF Instalaciones",
    "gestión de pedidos",
    "estado de órdenes",
    "panel de usuario",
    "instalaciones gráficas",
    "pedidos en proceso",
    "detalle de órdenes",
  ],
};

export default function MyOrdersPage() {
  return <ClientOrders />;
}
