"use client";
import React from "react";
import { IBannerInfoProps } from "./types";
import { bannerPanel } from "@/data/BannerPanel/banner-panel";
import { IBannerPanel } from "@/data/BannerPanel/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const BannerInfo: React.FC<IBannerInfoProps> = ({ type }) => {
  return (
    <div>
      {type === "panel" ? (
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
              <h3 className="font-semibold">{item.quantity}</h3>
            </div>
          ))}
        </div>
      ) : type === "users" ? (
        <div className="relative w-[325px] h-[46px] rounded-[50px] bg-bgColor/50 transition-[border] text-letterColorLight flex justify-between items-center gap-3 pl-3 mx-auto border-2 border-transparent focus-within:border-bgColor sm:w-[400px] lg:w-[640px]">
          <FontAwesomeIcon className="text-[25px]" icon={faMagnifyingGlass} />
          <div className="w-[1px] h-[25px] bg-bgColor"></div>
          <input
            className="w-full rounded-tr-[50px] rounded-br-[50px] h-full bg-transparent text-letterColorLight outline-none placeholder:text-letterColorLight"
            type="text"
            name="user"
            id="user"
            placeholder="Buscar usuario..."
          />
        </div>
      ) : null}
    </div>
  );
};

export default BannerInfo;
