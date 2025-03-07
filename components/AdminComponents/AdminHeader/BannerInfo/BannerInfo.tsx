"use client";
import React from "react";
import { IBannerInfoProps } from "./types";
import PanelInfo from "./PanelInfo/PanelInfo";
import UsersInfo from "./UsersInfo/UsersInfo";
import TrackingInfo from "./TrackingInfo/TrackingInfo";

export const BannerInfo: React.FC<IBannerInfoProps> = ({ type }) => {
  return (
    <div>
      {type === "panel" ? (
        <PanelInfo />
      ) : type === "users" ? (
        <UsersInfo />
      ) : type === "tracking" ?(
        <TrackingInfo/>
      ): null}
    </div>
  );
};

export default BannerInfo;
