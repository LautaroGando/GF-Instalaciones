import { useEffect } from "react";

export const useBodyScrollLock = (isOpen: boolean) => {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);
};
