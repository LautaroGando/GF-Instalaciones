import { Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";
import { formEditData } from "@/data/FormEditData/form-edit-data";
import { IFormEditData } from "@/data/FormEditData/types";
import InputEditField from "../InputEditField/InputEditField";
import { useUserStore } from "@/store/UserStore/userStore";
import { formatDateToInput } from "@/utils/formatDate";
import { AnimatePresence, motion } from "motion/react";
import { IUserEdit } from "@/interfaces/IProfile";
import { validateEditUser } from "@/helpers/validateEditUser";

export const ModalEditProfile: React.FC = () => {
  const { handleCloseEditMenu, handleEditUser, user } =
    useUserStore();
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const userInfo = user && "user" in user ? user.user : user;

  if (!userInfo) return null;

  return (
    <AnimatePresence mode="wait" onExitComplete={handleCloseEditMenu}>
      {isVisible && (
        <motion.div
          key={userInfo.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "backInOut" }}
          className="fixed w-full h-[100vh] bg-secondaryColor/80 left-0 top-0 z-50"
        >
          <div className="min-w-[330px] max-w-[330px] h-[600px] bg-bgColor shadow-md absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-auto sm:min-w-[600px] sm:max-w-[600px] md:min-w-[700px] md:max-w-[700px] md:h-max">
            <Formik
              initialValues={{
                fullName: userInfo.fullName,
                email: userInfo.email,
                birthDate: formatDateToInput(userInfo.birthDate),
                idNumber: userInfo.idNumber,
                country: userInfo.country,
                location: userInfo.location,
                address: userInfo.address,
                coverage: userInfo.coverage,
                phone: userInfo.phone,
              }}
              validate={validateEditUser}
              onSubmit={(values) => {
                handleEditUser(userInfo.id, values);
                setIsVisible(false);
              }}
            >
              {({ errors, touched }: FormikProps<IUserEdit>) => (
                <Form className="flex flex-col gap-5 p-5  justify-between">
                  <h2 className="text-primaryColor text-xl font-semibold">
                    Editar datos:
                  </h2>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {formEditData.map((field: IFormEditData, i: number) => (
                      <InputEditField
                        color="black"
                        key={i}
                        label={field.label}
                        name={field.name}
                        options={field.options}
                        select={field.select}
                        type={field.type}
                        isPhone={field.isPhone}
                        errors={errors[field.name as keyof IUserEdit]}
                        touched={touched[field.name as keyof IUserEdit]}
                      />
                    ))}
                  </div>
                  <div className="flex justify-end w-full gap-5">
                    <button
                      className="bg-primaryColor text-letterColorLight px-3 py-2 rounded-sm border-[2px] border-primaryColor transition-all duration-300 hover:bg-bgColor hover:text-primaryColor"
                      onClick={() => setIsVisible(false)}
                      type="button"
                    >
                      Cancelar
                    </button>
                    <button
                      className="bg-primaryColor text-letterColorLight px-3 py-2 rounded-sm border-[2px] border-primaryColor transition-all duration-300 hover:bg-bgColor hover:text-primaryColor"
                      type="submit"
                    >
                      Modificar
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalEditProfile;
