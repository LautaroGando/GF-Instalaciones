import { IUser } from "@/interfaces/IUser";
import { TInstallerStatus } from "@/types/TInstaller";
import React from "react";

export interface IUserStoreProps {
  users: IUser[] | null;
  filterUsers: IUser[] | null;
  isLoading: boolean;
  selectedFilter: string;
  searchTerm: string;
  sortBy: string;
  moreInfo: string | null;
  page: number;
  maxPage: number | null;
  setMaxPage: () => void;
  setMoreInfo: (id: string) => void;
  handleFilterUsers: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handleApplyFilter: (resetPage: boolean) => void;
  handleFetchUsers: () => Promise<void>;
  handleSearchUsers: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOrderUsers: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDisabledUser: (id: string) => void;
  handleActiveUser: (id: string) => void;
  handleChangeStatusInstaller: (id: string, status: TInstallerStatus) => void;
}
