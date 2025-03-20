"use client";
import { capitalize } from "@/utils/capitalize";
import {
  faChartPie,
  faChevronRight,
  faDiagramProject,
  faTableCellsLarge,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import React from "react";
import BannerInfo from "../BannerInfo/BannerInfo";
import type { TAdminBanner } from "@/types/TAdmin";
import Link from "next/link";

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
              : pathname === "/admin/tracking/installations"
              ? faTools
              : pathname === "/admin/blog"
              ? faTableCellsLarge
              : faChartPie
          }
        />

        <p className="flex gap-2 items-center font-light text-xs">
          <Link href={`/${splitPathname[1]}`} className="hover:underline">
            {capitalize(splitPathname[1])}
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />

          {splitPathname[2] && (
            <>
              <Link href={`/${splitPathname[1]}/${splitPathname[2]}`} className="hover:underline">
                {capitalize(splitPathname[2])}
              </Link>
              <FontAwesomeIcon icon={faChevronRight} />
            </>
          )}

          {splitPathname[3] && (
            <>
              <Link
                href={`/${splitPathname[1]}/${splitPathname[2]}/${splitPathname[3]}`}
                className="hover:underline"
              >
                {capitalize(splitPathname[3])}
              </Link>
            </>
          )}
        </p>
      </div>
      {splitPathname[2] && !splitPathname[3] && <BannerInfo type={splitPathname[2] as TAdminBanner} />}
      {splitPathname[3] && <BannerInfo type={splitPathname[3] as TAdminBanner} />}
    </div>
  );
};

export default Path;
