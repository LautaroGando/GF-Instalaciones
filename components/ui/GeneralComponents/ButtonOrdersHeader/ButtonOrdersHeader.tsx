import { useMenuStore } from "@/store/MenuStore/menuStore";
import { useProfileStore } from "@/store/ProfileStore/profileStore";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Link } from "lucide-react";
import React from "react";

const ButtonOrdersHeader: React.FC<{ classes: string }> = ({ classes }) => {
  const { handleClose } = useProfileStore();
  const { handleCloseMenu } = useMenuStore();

  return (
    <Link
      onClick={() => {
        handleClose();
        handleCloseMenu();
      }}
      href="/installer/installations"
      className={clsx(
        "text-primaryColor transition-all duration-500 w-max mx-auto flex items-center gap-2",
        classes
      )}
    >
      <FontAwesomeIcon className="w-[20px] text-lg" icon={faScrewdriverWrench} />
      Panel de instalador
    </Link>
  );
};

export default ButtonOrdersHeader;
