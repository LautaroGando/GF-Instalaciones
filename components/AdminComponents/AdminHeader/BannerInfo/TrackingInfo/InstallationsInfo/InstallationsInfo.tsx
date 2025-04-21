"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";

const InstallationsInfo = () => {
  const [input, setInput] = useState("");
  const setInstallationsSearch = useTrackingStore((state) => state.setInstallationsSearch);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInstallationsSearch(input);
    }, 300);

    return () => clearTimeout(timer);
  }, [input, setInstallationsSearch]);

  return (
    <div className="relative w-[325px] h-[46px] rounded-[50px] bg-bgColor/50 transition-[border] text-letterColorLight flex justify-between items-center gap-3 pl-3 mx-auto border-2 border-transparent focus-within:border-bgColor sm:w-[400px] lg:w-[640px]">
      <FontAwesomeIcon className="text-[25px]" icon={faMagnifyingGlass} width={25} />
      <div className="w-[1px] h-[25px] bg-bgColor"></div>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="w-full rounded-tr-[50px] rounded-br-[50px] h-full bg-transparent text-letterColorLight outline-none placeholder:text-letterColorLight"
        type="text"
        name="installation"
        id="installation"
        placeholder="Buscar por ciudad o coordinador..."
      />
    </div>
  );
};

export default InstallationsInfo;
