import { headerLinksAdmin } from "@/data/HeaderLinksAdmin/header-links-admin";
import { IHeaderLinkAdmin } from "@/data/HeaderLinksAdmin/types";
import { useMenuAdminStore } from "@/store/MenuAdminStore/menuAdminStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const SectionLink: React.FC = () => {
  const pathname = usePathname();
  const { handleCloseMenuAdmin } = useMenuAdminStore();
  const { menuAdmin } = useMenuAdminStore();

  return (
    <div className="flex flex-col">
      {headerLinksAdmin.map((link: IHeaderLinkAdmin, i: number) => (
        <Link
          key={i}
          onClick={handleCloseMenuAdmin}
          href={link.href}
          className={clsx(
            "w-full flex items-center gap-3 h-[50px] transition-all duration-500 border-l-2 border-transparent pl-2 lg:h-[70px] lg:pl-0",
            menuAdmin ? 'lg:justify-start lg:pl-2' : 'lg:justify-center',
            pathname.includes(link.label.toLowerCase())
              ? "bg-primaryColor text-letterColorLight"
              : "hover:bg-primaryColor/10 hover:border-primaryColor"
          )}
        >
          <FontAwesomeIcon icon={link.icon} className="w-[30px] lg:text-5xl" />
          <span className={clsx(menuAdmin ? 'lg:block' : 'lg:hidden')}>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default SectionLink;
