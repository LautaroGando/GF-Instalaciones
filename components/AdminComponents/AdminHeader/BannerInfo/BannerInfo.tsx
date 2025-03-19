"use client";
import React from "react";
import { IBannerInfoProps } from "./types";
import PanelInfo from "./PanelInfo/PanelInfo";
import UsersInfo from "./UsersInfo/UsersInfo";
import TrackingInfo from "./TrackingInfo/TrackingInfo";
import InstallationsInfo from "./TrackingInfo/InstallationsInfo/InstallationsInfo";

export const BannerInfo: React.FC<IBannerInfoProps> = ({ type }) => {
  return (
    <div>
      {type === "panel" ? (
        <PanelInfo />
      ) : type === "users" ? (
        <UsersInfo />
      ) : type === "tracking" ? (
        <TrackingInfo />
      ) : type === "installations" ? (
        <InstallationsInfo />
      ) : null}
    </div>
  );
};

export default BannerInfo;
