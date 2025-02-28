"use client";
import React from "react";
import { IBannerInfoProps } from "./types";
import PanelInfo from "./PanelInfo/PanelInfo";
import UsersInfo from "./UsersInfo/UsersInfo";

export const BannerInfo: React.FC<IBannerInfoProps> = ({ type }) => {
  return (
    <div>
      {type === "panel" ? (
        <PanelInfo />
      ) : type === "users" ? (
        <UsersInfo />
      ) : null}
    </div>
  );
};

export default BannerInfo;
