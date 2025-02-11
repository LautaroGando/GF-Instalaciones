import type { TAuthSignUp } from "@/types/TAuth";

export interface IAuthSignUpStoreProps {
  form: TAuthSignUp;
  handleFormSignUp: (form: TAuthSignUp) => void;
}
