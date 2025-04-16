import Link from "next/link";
import React from "react";

export const BackButton: React.FC = () => {
  return (
    <Link
      href="/"
      className="text-primaryColor bg-bgColor w-full flex justify-center items-center h-[50px] transition-all [clip-path:ellipse(100%_100%_at_50%_50%)] duration-300 relative hover:h-[80px] hover:[clip-path:ellipse(100%_90%_at_50%_100%)] hover:text-xl"
    >
      Volver
    </Link>
  );
};

export default BackButton;
