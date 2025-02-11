import { IUserSignIn } from "@/interfaces/IAuth";

export interface IFormSignInData {
  label: string;
  type: string;
  name: keyof IUserSignIn;
  icon: boolean;
  required: boolean;
}
