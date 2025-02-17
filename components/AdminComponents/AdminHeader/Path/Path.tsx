"use client";
import { capitalize } from "@/utils/capitalize";
import {
  faChartPie,
  faChevronRight,
  faDiagramProject,
  faTableCellsLarge,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import React from "react";
import BannerInfo from "../BannerInfo/BannerInfo";
import type { TAdminBanner } from "@/types/TAdmin";

export const Path: React.FC = () => {
  const pathname = usePathname();

  const splitPathname = pathname.split("/");

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2 items-center text-letterColorLight">
        <FontAwesomeIcon
          className="w-[20px]"
          icon={
            pathname === "/admin/panel"
              ? faChartPie
              : pathname === "/admin/users"
              ? faUser
              : pathname === "/admin/tracking"
              ? faDiagramProject
              : pathname === "/admin/blog"
              ? faTableCellsLarge
              : faChartPie
          }
        />
        <p className="flex gap-2 items-center font-light text-xs">
          {capitalize(splitPathname[1])}
          <FontAwesomeIcon icon={faChevronRight} />
          {capitalize(splitPathname[2])}
        </p>
      </div>
      <BannerInfo type={splitPathname[2] as TAdminBanner} />
    </div>
  );
};

export default Path;
