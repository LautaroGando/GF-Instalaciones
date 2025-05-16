import { IAdmin } from "./IAdmin";
import { ICoordinator } from "./ICoordinator";
import { IInstaller } from "./IInstaller";
import { IRole } from "./IRole";

export interface IUserRole {
  id: string;
  role: IRole;
}

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  birthDate: string;
  idNumber: string;
  location: string;
  address: string;
  locality: string;
  postalCode: string;
  country: string;
  phone: string;
  coverage: string;
  isSubscribed: boolean;
  createdAt: string;
  disabledAt: string | null;
  userRoles: IUserRole[];
  installer: IInstaller | null;
  coordinator: ICoordinator | null;
  admin: IAdmin | null;
}
