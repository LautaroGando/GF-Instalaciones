import TermsAndConditions from "@/components/TermsAndConditionsComponents/TermsAndConditions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | GF Instalaciones",
  description:
    "Consulta los términos y condiciones de uso del sitio de GF Instalaciones. Información sobre servicios, propiedad intelectual, privacidad y responsabilidades legales.",
  keywords: [
    "términos y condiciones",
    "uso del sitio web",
    "GF Recursos Gráficos",
    "propiedad intelectual",
    "protección de datos personales",
    "jurisdicción legal",
    "condiciones de servicio",
    "política de privacidad",
    "responsabilidad del usuario",
    "instalaciones gráficas",
  ],
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />;
}
