import React from "react";

import { IInstallationCardProps } from "./types";
import InstallationProgress from "../../../ui/MyOrdersComponents/ClientInstallations/InstallationProgress/InstallationProgress";
import CornerStatusTriangle from "@/components/ui/MyOrdersComponents/ClientInstallations/CornerStatusTriangle/CornerStatusTriangle";
import InstallationsCardHeader from "@/components/ui/MyOrdersComponents/ClientInstallations/InstallationsCardHeader/InstallationsCardHeader";

const InstallationCard: React.FC<IInstallationCardProps> = ({ styles, installation }) => {
  console.log(installation);

  return (
    <div
      className="relative rounded-2xl border-t-4 bg-white p-6 rounded-br-none shadow-md transition-all duration-300 hover:shadow-[0_4px_8px_rgba(0,0,0,0.12)] dark:bg-gray-900 group"
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
