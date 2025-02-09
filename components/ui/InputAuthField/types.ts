import { IUserSignUpOption } from "@/interfaces/IAuth";
import { TAuthColor } from "@/types/TAuth";

export interface IInputAuthFieldProps {
  label: string;
  type?: string;
  name: string;
  icon?: boolean;
  color: TAuthColor;
  select?: boolean;
  textarea?: boolean;
  options?: IUserSignUpOption[];
  isPhone?: boolean;
  errors?: string;
  touched?: boolean;
}
