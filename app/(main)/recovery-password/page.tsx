import RecoveryPassword from "@/components/RecoveryPasswordComponents/RecoveryPassword";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Recuperar Contraseña | GF Instalaciones",
  description:
    "Restablece tu contraseña de forma segura en GF Instalaciones. Ingresa una nueva clave para acceder nuevamente a tu cuenta y continuar gestionando tus instalaciones gráficas.",
  keywords: [
    "recuperar contraseña",
    "restablecer contraseña",
    "nueva contraseña",
    "GF Instalaciones",
    "seguridad de cuenta",
    "acceso seguro",
    "panel de usuario",
    "gestión de instalaciones",
    "recuperación de acceso",
    "formulario de contraseña",
  ],
};

export default function RecoveryPasswordPage() {
  return (
    <Suspense>
      <RecoveryPassword />;
    </Suspense>
  );
}
