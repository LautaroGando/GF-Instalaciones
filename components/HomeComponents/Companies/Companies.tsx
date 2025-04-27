"use client";
import { companiesData } from "@/data/HomeComponents/CompaniesData/companies-data";
import { ICompaniesData } from "@/data/HomeComponents/CompaniesData/types";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

export const Companies: React.FC = () => {
  const [isHovered, setIsHovered] = useState<number>(0);
  const { isDark } = useThemeStore();

  return (
    <Marquee
      className="flex mt-5 h-[200px] overflow-hidden"
      direction="left"
      pauseOnHover
      gradient
      gradientColor={isDark ? "#000000" : "#FAFAFA"}
      gradientWidth={100}
    >
      {companiesData.map((company: ICompaniesData, i: number) => (
        <Link
          href={company.href}
          key={i}
          target="_blank"
          onMouseEnter={() => setIsHovered(company.id)}
          onMouseLeave={() => setIsHovered(0)}
          onTouchStart={() => setIsHovered(company.id)}
          onTouchEnd={() => setIsHovered(0)}
          className="w-[150px] h-[150px] flex transition-all duration-300 mx-10 items-center justify-center hover:scale-[1.1]"
        >
          <svg
            width={150}
            height={150}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 130"
            preserveAspectRatio="xMidYMid meet"
            className={clsx(
              company.id === 2 || company.id === 3 || company.id === 4
                ? "mt-16"
                : company.id === 6 || company.id === 8
                ? "mt-24"
                : company.id === 7
                ? "mt-14"
                : ""
            )}
          >
            <path
              fill={isHovered === company.id ? "#A79351" : "#CACACA"}
              d={company.img}
            />
          </svg>
        </Link>
      ))}
    </Marquee>
  );
};

export default Companies;
