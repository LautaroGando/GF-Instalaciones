"use client"

import { useEffect } from "react";

const useDisableScroll = (shouldDisable: boolean) => {
  useEffect(() => {
    if (shouldDisable) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [shouldDisable]);
};

export default useDisableScroll;
