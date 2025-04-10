import { bannerPanel } from "@/data/BannerPanel/banner-panel";
import { IBannerPanel } from "@/data/BannerPanel/types";
import { useUserStore } from "@/store/UserStore/userStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CountUp from "react-countup";

export const PanelInfo: React.FC = () => {
  const { users } = useUserStore();

  const quantityUsers = users?.length ?? 0;

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
              end={item.label === "Usuarios" ? quantityUsers : 0}
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
