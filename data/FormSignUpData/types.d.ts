import {
  IUserSignUp,
  IUserSignUpInstaller,
  IUserSignUpOption,
} from "@/interfaces/IAuth";

export interface IFormSignUpData {
  label: string;
  type?: string;
  name: keyof IUserSignUp | keyof IUserSignUpInstaller;
  icon?: boolean;
  select?: boolean;
  textarea?: boolean;
  isPhone?: boolean;
  options?: IUserSignUpOption[];
  required: boolean;
}
