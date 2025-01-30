"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const usePath = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  return { pathname, hash };
};
