"use client";
import React from "react";
import { IBannerInfoProps } from "./types";
import { bannerPanel } from "@/data/BannerPanel/banner-panel";
import { IBannerPanel } from "@/data/BannerPanel/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BannerInfo: React.FC<IBannerInfoProps> = ({ type }) => {
  return (
    <div>
      {type === "panel" ? (
        <div className="flex flex-col gap-5">
          {bannerPanel.map((item: IBannerPanel, i: number) => (
            <div key={i} className="bg-bgColor/50 w-full h-[56px] flex justify-between items-center px-3 text-letterColorLight">
              <div className="flex items-center">
                <FontAwesomeIcon icon={item.icon} width={30} />
                <h3 className="text-sm">{item.label}</h3>
              </div>
              <h3 className="font-semibold">{item.quantity}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default BannerInfo;
