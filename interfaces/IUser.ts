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
  country: string;
  phone: string;
  password: string;
  coverage: string;
  isSubscribed: boolean;
  createdAt: string;
  disabledAt: string | null;
  userRoles: IUserRole[];
}
