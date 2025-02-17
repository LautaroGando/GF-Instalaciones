import React, { useState } from "react";
import { IInputAuthFieldProps } from "./types";
import { ErrorMessage, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import clsx from "clsx";
import { IUserSignUpOption } from "@/interfaces/IAuth";

export const InputAuthField: React.FC<IInputAuthFieldProps> = ({
  label,
  type,
  name,
  icon,
  color,
  select,
  textarea,
  options,
  isPhone,
  errors,
  touched,
  required,
}: IInputAuthFieldProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleToggleVisibilityPassword = () => setIsVisible(!isVisible);
  return (
    <div
      className={clsx(
        "flex flex-col h-[85px] relative",
        type === "radio" &&
          "sm:flex-row sm:items-center sm:justify-between sm:h-[40px]"
      )}
    >
      <label
        className={clsx(
          "text-xs",
          errors && touched && type === "radio"
            ? "text-error lg:text-sm dark:text-errorDark"
            : errors && touched
            ? "text-error dark:text-errorDark"
            : type === "radio"
            ? "text-secondaryColor text-center dark:text-letterColorLight lg:text-sm"
            : color === "white"
            ? "text-letterColorLight/50 dark:text-primaryColor/50"
            : "text-secondaryColor/50 dark:text-letterColorLight/50"
        )}
      >
        {required ? `${label}*` : label}
      </label>
      {type === "radio" ? (
        <div
          className="flex justify-center gap-10 mt-5 sm:mt-0 md:gap-3"
          role="radiogroup"
          aria-labelledby={name}
        >
          {options?.map((option, i) => (
            <label
              key={i}
              className="flex gap-3 items-center"
              htmlFor={`${name}-${i}`}
            >
              <span
                className={clsx(
                  errors && touched
                    ? "text-error dark:text-errorDark"
                    : option.option === "Sí"
                    ? "text-primaryColor"
                    : "text-secondaryColor dark:text-letterColorLight"
                )}
              >
                {option.option}
              </span>
              <Field
                type="radio"
                name={name}
                id={`${name}-${i}`}
                value={option.value}
                className="hidden peer"
              />
              <span
                className={clsx(
                  "w-4 h-4 border rounded-full relative flex items-center justify-center",
                  errors && touched
                    ? "border-error dark:border-errorDark"
                    : option.option === "Sí"
                    ? "border-primaryColor/50 peer-checked:after:content-[''] peer-checked:after:absolute peer-checked:after:w-3 peer-checked:after:h-3 peer-checked:after:bg-primaryColor peer-checked:after:rounded-full"
                    : "border-secondaryColor/50 peer-checked:after:content-[''] peer-checked:after:absolute peer-checked:after:w-3 peer-checked:after:h-3 peer-checked:after:bg-secondaryColor peer-checked:after:rounded-full dark:border-bgColor/50 dark:peer-checked:after:bg-bgColor"
                )}
              ></span>
            </label>
          ))}
          {errors && touched && (
            <ErrorMessage className="hidden" name={name} component="p" />
          )}
        </div>
      ) : isPhone ? (
        <div>
          <div className="flex gap-2 items-center">
            <Field
              as="select"
              name={`coverage`}
              id={`coverage`}
              className={clsx(
                "input w-20",
                color === "white"
                  ? "text-letterColorLight border-bgColor focus:border-bgColor dark:text-primaryColor dark:border-primaryColor"
                  : "text-secondaryColor border-secondaryColor focus:border-secondaryColor dark:text-letterColorLight dark:border-bgColor dark:focus:border-bgColor"
              )}
            >
              {options?.map((option: IUserSignUpOption, i: number) => (
                <option
                  key={i}
                  value={String(option.value)}
                  className="text-secondaryColor dark:bg-secondaryColor dark:text-letterColorLight"
                >
                  {option.option}
                </option>
              ))}
            </Field>
            <div className="w-[1px] h-[30px] bg-primaryColor"></div>
            <Field
              name={name}
              id={name}
              type="text"
              className={clsx(
                "input",
                errors && touched
                  ? "text-error border-error dark:text-errorDark dark:border-errorDark"
                  : color === "white"
                  ? "text-letterColorLight border-bgColor focus:border-bgColor dark:text-primaryColor dark:border-primaryColor"
                  : "text-secondaryColor border-secondaryColor focus:border-secondaryColor dark:text-letterColorLight dark:border-bgColor dark:focus:border-bgColor"
              )}
            />
          </div>
          {errors && touched && (
            <ErrorMessage className="inputError" name={name} component="p" />
          )}
        </div>
      ) : (
        <div>
          <Field
            as={(select && "select") || (textarea && "textarea")}
            name={name}
            id={name}
            type={type === "password" && isVisible ? "text" : type}
            className={clsx(
              "input",
              textarea && "pt-2 h-full",
              errors && touched
                ? "text-error border-error dark:text-errorDark dark:border-errorDark"
                : color === "white"
                ? "text-letterColorLight border-bgColor focus:border-bgColor dark:text-primaryColor dark:border-primaryColor dark:focus:border-primaryColor"
                : "text-secondaryColor border-secondaryColor focus:border-secondaryColor dark:text-letterColorLight dark:border-bgColor dark:focus:border-bgColor"
            )}
          >
            {options?.map((option: IUserSignUpOption, i: number) => (
              <option
                key={i}
                value={String(option.value)}
                className="text-secondaryColor dark:bg-secondaryColor dark:text-letterColorLight"
              >
                {option.option}
              </option>
            ))}
          </Field>
          {errors && touched && (
            <ErrorMessage className="inputError" name={name} component="p" />
          )}
        </div>
      )}
      {icon && type === "password" && (
        <motion.button
          key={isVisible ? "visible" : "hidden"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          onClick={handleToggleVisibilityPassword}
          className={clsx(
            "absolute right-3 bottom-10 w-[20px]",
            color === "white"
              ? "text-letterColorLight dark:text-primaryColor"
              : "text-primaryColor dark:text-letterColorLight"
          )}
        >
          {isVisible ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </motion.button>
      )}
    </div>
  );
};

export default InputAuthField;
