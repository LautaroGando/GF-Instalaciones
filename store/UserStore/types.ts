import { IUser } from "@/interfaces/IUser";
import React from "react";

export interface IUserStoreProps {
  users: IUser[];
  filterUsers: IUser[];
  fetchUsers: () => Promise<void>;
  handleSearchUsers: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterUsers: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOrderUsers: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
