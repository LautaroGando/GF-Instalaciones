import ButtonProfile from "@/components/ui/AdminComponents/ButtonProfile/ButtonProfile";
import { faBell, faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SectionInfo: React.FC = () => {
  return (
    <div className="border-b border-primaryColor pb-3 flex flex-col items-center gap-3">
      <div className="w-[80px] h-[80px] rounded-full bg-black"></div>
      <h3 className="font-medium min-w-max">Gastón Fernandez</h3>
      <div className="flex gap-5 justify-center">
        <button className="text-primaryColor relative border border-primaryColor p-2 w-[35px] h-[35px] rounded-sm flex justify-center items-center text-xl">
          <FontAwesomeIcon icon={faInbox} />
          <div className="absolute -top-1 -right-1 w-[15px] h-[15px] rounded-full bg-primaryColor text-letterColorLight flex justify-center items-center">
            <span className="text-xs">8</span>
          </div>
        </button>
        <button className="text-primaryColor relative border border-primaryColor p-2 w-[35px] h-[35px] rounded-sm flex justify-center items-center text-xl">
          <FontAwesomeIcon icon={faBell} />
          <div className="absolute -top-1 -right-1 w-[15px] h-[15px] rounded-full bg-primaryColor text-letterColorLight flex justify-center items-center">
            <span className="text-xs">2</span>
          </div>
        </button>
      </div>
      <ButtonProfile />
    </div>
  );
};

export default SectionInfo;
