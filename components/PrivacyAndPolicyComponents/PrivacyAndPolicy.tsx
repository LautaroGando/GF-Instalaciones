import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TermsAndPolicy from "../GeneralComponents/TermsAndPolicy/TermsAndPolicy";
import { privacyAndPolicyData } from "@/data/PrivacyAndPolicyComponents/TermsAndConditionsData/privacy-and-policy-data";

export const PrivacyAndPolicy: React.FC = () => {
  return (
    <div className="w-full flex flex-col py-10 gap-10">
      <h1 className="flex items-center gap-3 text-lg text-primaryColor font-semibold sm:text-2xl">
        <FontAwesomeIcon
          className="w-[20px] text-[20px] sm:w-[30px] sm:text-[30px]"
          icon={faShieldHalved}
          width={30}
        />
        POLÍTICA DE PRIVACIDAD
      </h1>
      <TermsAndPolicy data={privacyAndPolicyData} />
    </div>
  );
};

export default PrivacyAndPolicy;
