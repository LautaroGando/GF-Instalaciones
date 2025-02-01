"use client";
import { useEffect, useState } from "react";

export const useSize = () => {
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    const handleSize = () => setSize(window.innerWidth);
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return { size };
};
