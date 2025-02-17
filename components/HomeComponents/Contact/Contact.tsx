import React from "react";
import FormContact from "./FormContact/FormContact";
import HomeTitle from "@/components/ui/HomeComponents/HomeTitle/HomeTitle";

export const Contact: React.FC = () => {
  return (
    <section className="flex flex-col gap-10">
      <HomeTitle text="Contacto" />
      <FormContact />
    </section>
  );
};

export default Contact;
