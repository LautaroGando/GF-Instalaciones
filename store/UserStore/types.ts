import { IInstaller } from "@/interfaces/IInstaller";
import { IUser } from "@/interfaces/IUser";
import { TInstallerStatus } from "@/types/TInstaller";
import React from "react";

export interface IUserStoreProps {
  user: IUser | IInstaller | null;
  users: IUser[] | null;
  token: string | null;
  filterUsers: IUser[] | null;
  isLoading: boolean;
  selectedFilter: string;
  searchTerm: string;
  sortBy: string;
  moreInfo: string | null;
  page: number;
  maxPage: number | null;
  actionMenu: string | null;
  setMaxPage: () => void;
  setMoreInfo: (id: string) => void;
  setUser: (user: IUser | IInstaller) => void;
  setToken: (token: string) => void;
  handleFilterUsers: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handleApplyFilter: (resetPage: boolean) => void;
  handleFetchUsers: () => Promise<void>;
  handleSearchUsers: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOrderUsers: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDisabledUser: (id: string) => void;
  handleEditUser: (id: string, values: Partial<IUser | IInstaller>) => void;
  handleDeleteUser: (id: string) => void;
  handleActiveUser: (id: string) => void;
  handleChangeStatusInstaller: (id: string, status: TInstallerStatus) => void;
  handleLogout: () => void;
  handleActionMenu: (id: string) => void;
}
