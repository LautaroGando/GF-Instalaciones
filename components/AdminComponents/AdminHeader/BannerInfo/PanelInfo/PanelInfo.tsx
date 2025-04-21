import { bannerPanel } from "@/data/BannerPanel/banner-panel";
import { IBannerPanel } from "@/data/BannerPanel/types";
import { IInstaller } from "@/interfaces/IInstaller";
import { IUser } from "@/interfaces/IUser";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useUserStore } from "@/store/UserStore/userStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import CountUp from "react-countup";

export const PanelInfo: React.FC = () => {
  const { users } = useUserStore();
  const { installations, handleFetchInstallationsNotPagination } =
    useTrackingStore();

  useEffect(() => {
    handleFetchInstallationsNotPagination();
  }, [handleFetchInstallationsNotPagination]);

  const employees = users?.filter(
    (user: IUser) => user.installer?.status === "APROBADO" || user.coordinator
  );

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:gap-3">
      {bannerPanel.map((item: IBannerPanel, i: number) => (
        <div
          key={i}
          className="bg-bgColor/50 w-full h-[56px] flex justify-between items-center px-3 text-letterColorLight sm:h-[80px] sm:flex-col sm:justify-center sm:gap-1"
        >
          <div className="flex items-center sm:flex-col sm:gap-1">
            <FontAwesomeIcon icon={item.icon} width={30} />
            <h3 className="text-sm sm:text-xs md:text-sm">{item.label}</h3>
          </div>
          <h3 className="font-semibold">
            <CountUp
              end={
                item.label === "Usuarios"
                  ? users?.length ?? 0
                  : item.label === "Empleados"
                  ? employees?.length ?? 0
                  : item.label === "Instalaciónes"
                  ? installations?.length ?? 0
                  : 0
              }
              duration={3}
              delay={0.5}
            />
          </h3>
        </div>
      ))}
    </div>
  );
};

export default PanelInfo;
