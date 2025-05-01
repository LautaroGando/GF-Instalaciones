import React from "react";

import { IInstallationCardProps } from "./types";
import InstallationProgress from "../../../ui/MyOrdersComponents/ClientInstallations/InstallationProgress/InstallationProgress";
import CornerStatusTriangle from "@/components/ui/MyOrdersComponents/ClientInstallations/CornerStatusTriangle/CornerStatusTriangle";
import InstallationsCardHeader from "@/components/ui/MyOrdersComponents/ClientInstallations/InstallationsCardHeader/InstallationsCardHeader";

const InstallationCard: React.FC<IInstallationCardProps> = ({ styles, installation }) => {
  return (
    <div
      className="relative rounded-2xl border-t-4 bg-white p-6 pb-10 rounded-br-none shadow-md transition-all duration-500 hover:shadow-[0_4px_8px_rgba(0,0,0,0.12)] group dark:bg-[#0e0e0e] dark:border-white/10 dark:text-white dark:shadow-[0_2px_4px_rgba(255,255,255,0.04),0_10px_40px_rgba(255,255,255,0.06)]
dark:hover:shadow-[0_4px_8px_rgba(255,255,255,0.08),0_12px_48px_rgba(255,255,255,0.1)]
"
      style={{ borderColor: styles.border, }}
    >
      {/* id, direccion y estado */}
      <InstallationsCardHeader installation={installation} styles={styles} />

      {/*Barra de progreso*/}
      <InstallationProgress installation={installation} />

      {/* Triángulo esquina */}
      <CornerStatusTriangle styles={styles} />
    </div>
  );
};

export default InstallationCard;
