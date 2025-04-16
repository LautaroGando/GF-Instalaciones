"use client";
import { useEffect } from "react";

export const ScrollHeaderEffect = () => {
  useEffect(() => {
    const header = document.getElementById("main-header");
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add("scrolledHeader");
      } else {
        header.classList.remove("scrolledHeader");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};
