import { create } from "zustand";
import { IUserStoreProps } from "./types";
import { activeUser, changeStatusInstaller, disabledUser, findUsers } from "@/services/users";
import { IUser } from "@/interfaces/IUser";
import React from "react";
import { formatDate } from "@/utils/formatDate";
import { TInstallerStatus } from "@/types/TInstaller";

export const useUserStore = create<IUserStoreProps>((set, get) => ({
  users: null,
  installers: null,
  filterUsers: null,
  isLoading: false,
  selectedFilter: "all",
  searchTerm: "",
  sortBy: "none",
  moreInfo: null,
  page: 1,
  maxPage: null,
  getInstallers: async () => {
    let allUsers: IUser[] = get().users || [];
    if (allUsers.length === 0) {
      const fetchedUsers = await findUsers();
      if (!fetchedUsers) return;
      allUsers = fetchedUsers;
      set({ users: allUsers });
    }
    set({ installers: allUsers.filter((user) => user.role.name === "installer") });
  },
  setMaxPage: () => {
    const { filterUsers } = get();
    const maxPages = filterUsers && filterUsers.length > 0 ? Math.ceil(filterUsers.length / 10) : 1;
    set({ maxPage: maxPages });
  },
  setMoreInfo: (id: string) => {
    const { moreInfo } = get();
    set({ moreInfo: moreInfo === id ? null : id });
  },
  handleFilterUsers: (e: React.ChangeEvent<HTMLSelectElement>) => {
    set({ selectedFilter: e.target.value });
    get().handleApplyFilter(true);
  },
  handlePrevPage: () => {
    const { page } = get();
    set({ page: page - 1 });
  },
  handleNextPage: () => {
    const { page } = get();
    set({ page: page + 1 });
  },
  handleApplyFilter: (resetPage = true) => {
    const { users, selectedFilter, searchTerm, sortBy, setMaxPage, page } = get();

    let filteredUsers: IUser[] = users ?? [];

    filteredUsers = filteredUsers.filter((user: IUser) =>
      selectedFilter === "user"
        ? user.role.name === "Usuario"
        : selectedFilter === "installer"
        ? user.role.name === "Instalador"
        : selectedFilter === "coordinator"
        ? user.role.name === "Coordinador"
        : selectedFilter === "active"
        ? !user.disabledAt &&
          user.installer?.status !== "RECHAZADO" &&
          user.installer?.status !== "EN_PROCESO"
        : selectedFilter === "in_proccess"
        ? user.installer?.status === "EN_PROCESO"
        : selectedFilter === "inactive"
        ? user.disabledAt
        : selectedFilter === "rejected"
        ? user.installer?.status === "RECHAZADO"
        : user
    );

    if (searchTerm) {
      filteredUsers = filteredUsers.filter((user: IUser) =>
        user.email.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    }

    if (sortBy !== "none") {
      filteredUsers = [...filteredUsers].sort((a, b) =>
        sortBy === "abc"
          ? a.email.localeCompare(b.email)
          : sortBy === "role"
          ? a.role.name.localeCompare(b.role.name)
          : new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
      );
    }

    set({ filterUsers: filteredUsers, page: resetPage ? 1 : page });
    setMaxPage();
  },
  handleFetchUsers: async () => {
    try {
      set({ isLoading: true });
      const users = await findUsers();
      setTimeout(() => {
        set({ users, filterUsers: users });
        get().setMaxPage();
        set({ isLoading: false });
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  },
  handleSearchUsers: (e: React.ChangeEvent<HTMLInputElement>) => {
    set({ searchTerm: e.target.value });
    get().handleApplyFilter(false);
  },
  handleOrderUsers: (e: React.ChangeEvent<HTMLSelectElement>) => {
    set({ sortBy: e.target.value });
    get().handleApplyFilter(false);
  },
  handleDisabledUser: async (id: string) => {
    try {
      await disabledUser(id);
      set((state) => ({
        users: state.users?.map((user: IUser) =>
          user.id === id ? { ...user, disabledAt: formatDate(new Date().toISOString()) } : user
        ),
      }));
      get().handleApplyFilter(false);
    } catch (error) {
      console.log(error);
    }
  },
  handleActiveUser: async (id: string) => {
    try {
      await activeUser(id);
      set((state) => ({
        users: state.users?.map((user: IUser) =>
          user.id === id ? { ...user, disabledAt: null } : user
        ),
      }));
      get().handleApplyFilter(false);
    } catch (error) {
      console.log(error);
    }
  },
  handleChangeStatusInstaller: async (id: string, status: TInstallerStatus) => {
    try {
      await changeStatusInstaller(id, status);
      set((state) => ({
        users: state.users?.map((user: IUser) =>
          user.installer && user.installer.id === id
            ? { ...user, installer: { ...user.installer, status } }
            : user
        ),
      }));
      get().handleApplyFilter(true);
    } catch (error) {
      console.log(error);
    }
  },
}));
