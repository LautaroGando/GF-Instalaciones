import { socialMediaData } from "@/data/SocialMediaData/social-media-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex justify-between items-center w-[250px] mx-auto my-[19px] sm:w-[340px] lg:mb-[30px] xl:w-[400px]">
      {socialMediaData.map((item, i) => (
        <Link
          key={i}
          className="border-[1px] border-primaryColor rounded-full size-[36px] flex items-center justify-center sm:size-[50px] lg:size-[56px] xl:size-[60px] 
                 transition-transform transform group hover:scale-110 hover:bg-primaryColor hover:border-primaryColor"
          title={`Icono de ${item.name}`}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="size-[20px] text-primaryColor sm:size-[26px] lg:size-[28px] xl:size-[30px] 
                   transition-colors duration-300 group-hover:text-white"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
