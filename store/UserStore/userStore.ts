import { create } from "zustand";
import { IUserStoreProps } from "./types";
import { findUsers } from "@/services/users";
import { IUser } from "@/interfaces/IUser";
import React from "react";

export const useUserStore = create<IUserStoreProps>((set, get) => {
  const store = {
    users: [],
    filterUsers: [],
    fetchUsers: async () => {
      const users = await findUsers();
      set({ users, filterUsers: users });
    },
    handleSearchUsers: (e: React.ChangeEvent<HTMLInputElement>) => {
      const { users } = get();

      const filterUsers = users.filter((user: IUser) =>
        user.email.toLowerCase().startsWith(e.target.value)
      );
      set({ filterUsers });
    },
    handleFilterUsers: (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { users } = get();

      const filterUsers = users.filter((user: IUser) =>
        e.target.value === "user"
          ? user.role.name === "Usuario"
          : e.target.value === "installer"
          ? user.role.name === "Instalador"
          : e.target.value === "coordinator"
          ? user.role.name === "Coordinador"
          : e.target.value === "active"
          ? !user.disabledAt
          : e.target.value === "inactive"
          ? user.disabledAt
          : user
      );
      set({ filterUsers });
    },
    handleOrderUsers: (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { users } = get();

      const orderUsers = users.sort((a, b) =>
        e.target.value === "abc"
          ? a.email.localeCompare(b.email)
          : e.target.value === "role"
          ? a.role.name.localeCompare(b.role.name)
          : e.target.value === "status"
          ? (a.disabledAt === null ? -1 : 1) - (b.disabledAt === null ? -1 : 1)
          : new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
      );

      set({ filterUsers: orderUsers });
    },
  };

  store.fetchUsers();

  return store;
});
