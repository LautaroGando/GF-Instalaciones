import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TrackingInfo = () => {
  return (
    <div className="relative w-[325px] h-[46px] rounded-[50px] bg-bgColor/50 transition-[border] text-letterColorLight flex justify-between items-center gap-3 pl-3 mx-auto border-2 border-transparent focus-within:border-bgColor sm:w-[400px] lg:w-[640px]">
      <FontAwesomeIcon className="text-[25px]" icon={faMagnifyingGlass} width={25} />
      <div className="w-[1px] h-[25px] bg-bgColor"></div>
      <input
        className="w-full rounded-tr-[50px] rounded-br-[50px] h-full bg-transparent text-letterColorLight outline-none placeholder:text-letterColorLight"
        type="text"
        name="user"
        id="user"
        placeholder="Buscar usuario..."
      />
    </div>
  );
};

export default TrackingInfo;
