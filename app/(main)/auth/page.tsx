import Auth from "@/components/AuthComponents/Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ingreso | GF Instalaciones",
  description:
    "Accede a tu cuenta en GF Instalaciones para gestionar tus instalaciones gráficas, consultar órdenes y mantener tu información actualizada de forma segura.",
  keywords: [
    "iniciar sesión",
    "acceso",
    "autenticación",
    "login",
    "GF Instalaciones",
    "panel de usuario",
    "gestión de instalaciones",
    "cuenta de usuario",
    "seguridad de acceso",
    "portal de clientes",
  ],
};

export default function AuthPage() {
  return <Auth />;
}
