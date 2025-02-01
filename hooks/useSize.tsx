"use client";
import { useEffect, useState } from "react";

export const useSize = () => {
  const [size, setSize] = useState<number>(
    typeof window.innerWidth !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleSize = () => setSize(window.innerWidth);
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return { size };
};
