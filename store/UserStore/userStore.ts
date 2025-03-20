import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IUserStoreProps } from "./types";
import {
  activeUser,
  changeStatusInstaller,
  deleteUser,
  disabledUser,
  editUser,
  findUsers,
} from "@/services/users";
import { IUser } from "@/interfaces/IUser";
import React from "react";
import { formatDate } from "@/utils/formatDate";
import { TInstallerStatus } from "@/types/TInstaller";
import { popUpDeleteUser, popUpLogout } from "@/utils/popUp";
import { IInstaller } from "@/interfaces/IInstaller";
import Cookies from "js-cookie";

export const useUserStore = create<IUserStoreProps>()(
  persist(
    (set, get) => ({
      user: null,
      users: null,
      token: null,
      filterUsers: null,
      isLoading: false,
      selectedFilter: "all",
      searchTerm: "",
      sortBy: "latest",
      moreInfo: null,
      page: 1,
      maxPage: null,
      actionMenu: null,
      setMaxPage: () => {
        const { filterUsers } = get();
        const maxPages =
          filterUsers && filterUsers.length > 0
            ? Math.ceil(filterUsers.length / 10)
            : 1;
        set({ maxPage: maxPages });
      },
      setMoreInfo: (id: string) => {
        const { moreInfo } = get();
        set({ moreInfo: moreInfo === id ? null : id });
      },
      setUser: (user: IUser | IInstaller) => {
        set({ user });
        Cookies.set(
          "user-storage",
          JSON.stringify({ user, token: get().token }),
          {
            expires: 7,
            secure: true,
            sameSite: "Strict",
          }
        );
      },
      setToken: (token: string) => {
        set({ token });
        Cookies.set(
          "user-storage",
          JSON.stringify({ user: get().user, token }),
          {
            expires: 7,
            secure: true,
            sameSite: "Strict",
          }
        );
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
        const { users, selectedFilter, searchTerm, sortBy, setMaxPage, page } =
          get();

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
          filteredUsers = [...filteredUsers].sort((a: IUser, b: IUser) => {
            const parseDate = (date: string) => {
              if (!date || typeof date !== "string") return 0;

              const fixedDate = date.includes("/")
                ? date.split("/").reverse().join("-")
                : date;

              const parsed = new Date(fixedDate).getTime();
              return isNaN(parsed) ? 0 : parsed;
            };

            return sortBy === "abc"
              ? a.email.localeCompare(b.email)
              : sortBy === "role"
              ? a.role.name.localeCompare(b.role.name)
              : parseDate(b.createAt) - parseDate(a.createAt);
          });
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
            get().handleApplyFilter(false);
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
              user.id === id
                ? { ...user, disabledAt: formatDate(new Date().toISOString()) }
                : user
            ),
          }));
          get().handleApplyFilter(false);
        } catch (error) {
          console.log(error);
        }
      },
      handleEditUser: async (
        id: string,
        values: Partial<IUser | IInstaller>
      ) => {
        const { user, users } = get();

        try {
          const updatedUser = await editUser(id, values);

          set({
            user: { ...user, ...updatedUser },
            users: users?.map((user) =>
              user.id === id ? { ...user, ...updatedUser } : user
            ),
          });

          get().handleApplyFilter(false);
        } catch (error) {
          console.log(error);
        }
      },
      handleDeleteUser: async (id: string) => {
        popUpDeleteUser(async () => {
          try {
            const data = await deleteUser(id);
            if (data) {
              set((state) => ({
                users: state.users?.filter((user: IUser) => user.id !== id),
                filterUsers: state.filterUsers?.filter(
                  (user: IUser) => user.id !== id
                ),
              }));
            }
            get().setMaxPage();
            get().handleApplyFilter(true);
          } catch (error) {
            console.log(error);
          }
        });
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
      handleChangeStatusInstaller: async (
        id: string,
        status: TInstallerStatus
      ) => {
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
      handleLogout: () => {
        popUpLogout(() => {
          set({ user: null, token: null });
          Cookies.remove("user-storage");
        });
      },
      handleActionMenu: (id: string) => {
        const { actionMenu } = get();
        set({ actionMenu: actionMenu === id ? null : id });
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
);
