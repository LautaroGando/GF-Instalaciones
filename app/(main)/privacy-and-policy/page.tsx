import PrivacyAndPolicy from "@/components/PrivacyAndPolicyComponents/PrivacyAndPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | GF Instalaciones",
  description:
    "Conoce cómo GF Instalaciones protege tus datos personales. Información sobre recolección, uso, derechos del usuario y medidas de seguridad aplicadas.",
  keywords: [
    "política de privacidad",
    "protección de datos personales",
    "datos personales",
    "GDPR",
    "cookies",
    "seguridad de datos",
    "derechos del usuario",
    "tratamiento de datos",
    "confidencialidad",
    "GF Instalaciones",
  ],
};

export default function PrivacyAndPolicyPage() {
  return <PrivacyAndPolicy />;
}
