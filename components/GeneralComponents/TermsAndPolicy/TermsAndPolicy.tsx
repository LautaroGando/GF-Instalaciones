"use client";
import React, { useState } from "react";
import { TermsAndPolicyProps } from "./types";
import { ITermsDataAndConditions } from "@/data/TermsAndConditionsComponents/TermsAndConditionsData/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { IPrivacyAndPolicy } from "@/data/PrivacyAndPolicyComponents/TermsAndConditionsData/types";

export const TermsAndPolicy: React.FC<
  TermsAndPolicyProps<ITermsDataAndConditions | IPrivacyAndPolicy>
> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {data.map((d: ITermsDataAndConditions | IPrivacyAndPolicy) => (
        <div
          key={d.id}
          onClick={() => setIsOpen((prev) => (prev === d.id ? null : d.id))}
          className={clsx(
            "flex flex-col overflow-hidden border-b transition-all duration-300",
            isOpen === d.id
              ? "max-h-[280px] border-primaryColor sm:max-h-[220px] lg:max-h-[170px] xl:max-h-[150px]"
              : "max-h-[50px] border-primaryColor/20"
          )}
        >
          <div
            className={clsx(
              "text-primaryColor flex items-center w-full min-h-[50px] cursor-pointer justify-between transition-all duration-300 px-3 hover:bg-primaryColor/5",
              isOpen === d.id
                ? "bg-primaryColor/10"
                : "bg-bgColor dark:bg-bgColorDark"
            )}
          >
            <h2
              className={clsx(
                "flex items-center gap-3 transition-all duration-300 text-xs sm:text-base",
                isOpen === d.id ? "font-medium" : "font-normal"
              )}
            >
              {d.id}.{" "}
              <span
                className={clsx(
                  "text-sm transition-all duration-300 sm:text-xl",
                  isOpen === d.id ? "font-semibold" : "font-medium"
                )}
              >
                {d.title}
              </span>
            </h2>
            <FontAwesomeIcon
              className={clsx(
                "w-[16px] transition-all duration-300",
                isOpen === d.id && "-rotate-180 text-primaryColorHover"
              )}
              icon={faChevronDown}
              width={16}
            />
          </div>
          <p className="p-3 bg-primaryColor/5 text-black/50 font-medium text-sm dark:text-letterColorLight/50 sm:text-base">
            {d.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TermsAndPolicy;
