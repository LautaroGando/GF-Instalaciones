import React from "react";

import { IInstallationCardProps } from "./types";
import InstallationProgress from "../../../ui/MyOrdersComponents/ClientInstallations/InstallationProgress/InstallationProgress";
import CornerStatusTriangle from "@/components/ui/MyOrdersComponents/ClientInstallations/CornerStatusTriangle/CornerStatusTriangle";
import InstallationsCardHeader from "@/components/ui/MyOrdersComponents/ClientInstallations/InstallationsCardHeader/InstallationsCardHeader";
import useInstallationsTableLogic from "@/hooks/useInstallationsTableLogic";

const InstallationCard: React.FC<IInstallationCardProps> = ({ styles, installation }) => {
  const { handleViewNotes } = useInstallationsTableLogic();

  return (
    <div
      className="relative rounded-2xl border-t-4 sm:h-[290px] bg-white p-6 pb-10 rounded-br-none shadow-md transition-all duration-500 hover:shadow-[0_4px_8px_rgba(0,0,0,0.12)] group dark:bg-[#0e0e0e] dark:border-white/10 dark:text-white dark:shadow-[0_2px_4px_rgba(255,255,255,0.04),0_10px_40px_rgba(255,255,255,0.06)]
      dark:hover:shadow-[0_4px_8px_rgba(255,255,255,0.08),0_12px_48px_rgba(255,255,255,0.1)]
      "
      style={{ borderColor: styles.border }}
    >
      <InstallationsCardHeader installation={installation} styles={styles} />
      <InstallationProgress installation={installation} />

      {installation.status === "Finalizada" ? (
        <button
          onClick={() => handleViewNotes(installation, installation.notes, installation.images)}
          className="z-20 flex items-center gap-2 rounded-lg bg-admin-activeColor text-white px-4 py-2 text-sm font-semibold shadow-lg transition hover:scale-[1.03] hover:bg-admin-activeColor/90 active:scale-100 dark:bg-admin-activeColor/80
    sm:absolute sm:bottom-4 sm:right-4 sm:mt-0 mt-8 mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h18M3 10h18M3 15h18M3 20h18"
            />
          </svg>
          Ver imágenes
        </button>
      ) : (
        <CornerStatusTriangle styles={styles} />
      )}
    </div>
  );
};

export default InstallationCard;
