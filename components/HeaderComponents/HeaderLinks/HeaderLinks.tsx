"use client";
import { IHeaderLink } from "@/interfaces/IHeaderLink";
import { headerLinks } from "@/utils/header-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

export const HeaderLinks: React.FC = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const handleHash = () => setHash(window.location.hash);
    handleHash();
    window.addEventListener("hashchange", handleHash);
    window.addEventListener("popstate", handleHash);
    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("popstate", handleHash);
    };
  }, []);

  console.log(hash);

  return (
    <ul>
      {headerLinks.map((link: IHeaderLink, i: number) => {
        const isActive = link.href === pathname + hash;

        return (
          <li key={i}>
            <Link
              className={clsx(
                "font-textFont text-2xl",
                isActive
                  ? "text-primaryColor font-semibold"
                  : "text-secondaryColor"
              )}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderLinks;
