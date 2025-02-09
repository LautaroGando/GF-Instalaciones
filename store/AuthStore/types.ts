import type { TAuth } from "@/types/TAuth";

export interface IAuthStoreProps {
  view: TAuth;
  handleVisibleForm: (view: TAuth) => void;
}
