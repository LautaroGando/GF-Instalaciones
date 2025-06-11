import { IUserSafe } from "./IUserSafe";

export interface ICoordinator {
  id: string;
  isActive: boolean;
  user: IUserSafe;
}
