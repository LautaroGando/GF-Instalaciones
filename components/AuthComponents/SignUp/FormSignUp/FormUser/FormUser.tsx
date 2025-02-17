import { formSignUpData } from "@/data/FormSignUpData/form-signup-data";
import { IFormSignUpData } from "@/data/FormSignUpData/types";
import { validateSignUp } from "@/helpers/validateSignUp";
import { IUserSignUp } from "@/interfaces/IAuth";
import { useAuthStore } from "@/store/AuthStore/authStore";
import clsx from "clsx";
import { Form, Formik, FormikProps } from "formik";
import React from "react";
import { motion } from "motion/react";
import InputAuthField from "@/components/ui/AuthComponents/InputAuthField/InputAuthField";
import ButtonAuth from "@/components/ui/AuthComponents/ButtonAuth/ButtonAuth";

export const FormUser: React.FC = () => {
  const { view } = useAuthStore();

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className={clsx(
        "w-full flex flex-col items-center gap-5 mx-auto max-w-[410px]",
        view === "signIn" && "h-[550px] overflow-hidden"
      )}
    >
      <h2 className="text-lg tracking-[3px] text-secondaryColor self-start dark:text-letterColorLight">
        REGISTRARSE
      </h2>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          birthDate: "",
          idNumber: "",
          country: "",
          state: "",
          address: "",
          coverage: "+54",
          phone: "",
          password: "",
          repeatPassword: "",
        }}
        validate={validateSignUp}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }: FormikProps<IUserSignUp>) => (
          <Form className="w-full flex flex-col gap-5">
            {formSignUpData.map((field: IFormSignUpData, i: number) => (
              <InputAuthField
                key={i}
                label={field.label}
                name={field.name}
                type={field.type}
                icon={field.icon}
                color="black"
                select={field.select}
                options={field.options}
                isPhone={field.isPhone}
                errors={errors[field.name as keyof IUserSignUp]}
                touched={touched[field.name as keyof IUserSignUp]}
                required={field.required}
              />
            ))}
            <ButtonAuth label="CREAR CUENTA" form="signUp" />
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default FormUser;
