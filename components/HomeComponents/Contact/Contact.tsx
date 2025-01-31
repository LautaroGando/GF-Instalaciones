import HomeTitle from "@/components/ui/HomeTitle/HomeTitle";
import React from "react";
import FormContact from "./FormContact/FormContact";

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <HomeTitle text="Contacto" />
      <FormContact />
    </div>
  );
};

export default Contact;
