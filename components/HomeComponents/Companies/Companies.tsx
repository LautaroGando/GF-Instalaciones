"use client";
import { companiesData } from "@/data/HomeComponents/CompaniesData/companies-data";
import { ICompaniesData } from "@/data/HomeComponents/CompaniesData/types";
import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

export const Companies: React.FC = () => {
  const [isHovered, setIsHovered] = useState<number>(0);

  return (
    <Marquee className="flex mt-5 h-[200px]" direction="left" pauseOnHover>
      {companiesData.map((company: ICompaniesData, i: number) => (
        <Link
          href={company.href}
          key={i}
          target="_blank"
          onMouseEnter={() => setIsHovered(company.id)}
          onMouseLeave={() => setIsHovered(0)}
          onTouchStart={() => setIsHovered(company.id)}
          onTouchEnd={() => setIsHovered(0)}
          className="w-[150px] h-[150px] flex mx-5 transition-all duration-300 items-center justify-center hover:scale-[1.1]"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256.000000 256.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
              fill={isHovered === company.id ? "#A79351" : "#CACACA"}
              stroke="none"
            >
              <path d={company.img} />
            </g>
          </svg>
        </Link>
      ))}
    </Marquee>
  );
};

export default Companies;
