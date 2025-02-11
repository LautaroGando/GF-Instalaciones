import { blogSocialLinks } from "@/data/BlogSocialLinks/BlogSocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BlogSocialIcons: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const mobileClasses = "flex justify-between my-[25px] sm:justify-start sm:gap-[40px] lg:hidden";
  const desktopClasses =
    "hidden lg:sticky lg:flex lg:flex-col lg:gap-4 lg:pb-[80px] lg:top-[90px] lg:right-[100px]";

  return (
    <div className={`${isMobile ? mobileClasses : desktopClasses} text-lg text-primaryColor`}>
      {blogSocialLinks.map(({ icon, url, label }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-200"
          aria-label={label}
        >
          <FontAwesomeIcon
            icon={icon}
            className="text-[25px] sm:text-[28px] transition-all duration-200 hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
};

export default BlogSocialIcons;
