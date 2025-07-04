import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IUserStoreProps } from "./types";
import {
  activeUser,
  changeStatusInstaller,
  deleteUser,
  disabledUser,
  editUser,
  findInstallers,
  findUsers,
} from "@/services/users";
import { IUser } from "@/interfaces/IUser";
import React from "react";
import { formatDate } from "@/utils/formatDate";
import { TInstallerStatus } from "@/types/TInstaller";
import { IInstaller } from "@/interfaces/IInstaller";
import Cookies from "js-cookie";
import PersonalizedPopUp from "@/components/ui/GeneralComponents/PersonalizedPopUp/PersonalizedPopUp";
import type { TColor } from "@/types/TColor";
import { Role } from "@/enums/Role";
import { assignRole, deleteRole } from "@/services/roles";

export const useUserStore = create<IUserStoreProps>()(
  persist(
    (set, get) => ({
      user: null,
      users: null,
      installers: null,
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
      editMenu: false,
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
      setUserAndToken: (user: IUser | IInstaller, token: string) => {
        if (!user || !token) return;

        const payload = { user, token };

        set({ user, token });

        Cookies.set("user-storage", JSON.stringify(payload), {
          expires: 7,
          secure: true,
          sameSite: "Strict",
        });
      },
      handleOpenEditMenu: () => set(() => ({ editMenu: true })),
      handleCloseEditMenu: () => set(() => ({ editMenu: false })),
      handleFilterUsers: (value: string) => {
        set({ selectedFilter: value });
        get().handleApplyFilter(true);
      },

      handleFetchInstallers: async () => {
        try {
          const fetchInstallers = await findInstallers();
          set(() => ({
            installers: fetchInstallers,
          }));
        } catch (err) {
          console.log(err);
        }
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
            ? user.userRoles[user.userRoles.length - 1].role.name === "Usuario"
            : selectedFilter === "installer"
            ? user.userRoles[user.userRoles.length - 1].role.name ===
              "Instalador"
            : selectedFilter === "coordinator"
            ? user.userRoles[user.userRoles.length - 1].role.name ===
              "Coordinador"
            : selectedFilter === "active"
            ? !user.disabledAt &&
              user.installer?.status !== "RECHAZADO" &&
              user.installer?.status !== "EN PROCESO"
            : selectedFilter === "in_proccess"
            ? user.installer?.status === "EN PROCESO"
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
              ? a.userRoles[a.userRoles.length - 1].role.name.localeCompare(
                  b.userRoles[b.userRoles.length - 1].role.name
                )
              : parseDate(b.createdAt) - parseDate(a.createdAt);
          });
        }

        set({ filterUsers: filteredUsers, page: resetPage ? 1 : page });
        setMaxPage();
      },
      handleFetchUsers: async () => {
        try {
          set({ isLoading: true });
          const users = await findUsers();
          set({ users, filterUsers: users });
          get().setMaxPage();
          get().handleApplyFilter(false);
          set({ isLoading: false });
        } catch (error) {
          console.log(error);
        }
      },
      handleSearchUsers: (e: React.ChangeEvent<HTMLInputElement>) => {
        set({ searchTerm: e.target.value });
        get().handleApplyFilter(false);
      },
      handleOrderUsers: (value: string) => {
        set({ sortBy: value });
        get().handleApplyFilter(false);
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
      handleDeleteUser: async (id: string, color: TColor) => {
        await PersonalizedPopUp({
          color: color,
          withResult: true,
          simpleModal: false,
          title: "¿Deseas eliminar el usuario?",
          text: "Este cambio no será reversible.",
          titleSuccess: "Usuario eliminado",
          textSuccess: "El usuario ha sido eliminado con éxito.",
          titleError: "Error",
          textError: "No se pudo eliminar el usuario. Intenta nuevamente.",
          icon: "success",
          cancelButtonText: "Cancelar",
          confirmButtonText: "Sí, eliminar",
          genericFunction: async () => {
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
          },
        });
      },
      handleDisabledUser: async (id: string, color: TColor) => {
        await PersonalizedPopUp({
          color: color,
          withResult: true,
          simpleModal: false,
          title: "¿Deseas desactivar el usuario?",
          text: "Este cambio podrá ser reversible.",
          titleSuccess: "Usuario desactivado",
          textSuccess: "El usuario ha sido desactivado con éxito.",
          titleError: "Error",
          textError: "No se pudo desactivar el usuario. Intenta nuevamente.",
          icon: "success",
          cancelButtonText: "Cancelar",
          confirmButtonText: "Sí, desactivar",
          genericFunction: async () => {
            await disabledUser(id);
            set((state) => ({
              users: state.users?.map((user: IUser) =>
                user.id === id
                  ? {
                      ...user,
                      disabledAt: formatDate(new Date().toISOString()),
                    }
                  : user
              ),
            }));
            get().handleApplyFilter(false);
            get().handleFetchUsers();
          },
        });
      },
      handleActiveUser: async (id: string, color: TColor) => {
        await PersonalizedPopUp({
          color: color,
          withResult: true,
          simpleModal: false,
          title: "¿Deseas activar el usuario?",
          text: "Este cambio podrá ser reversible.",
          titleSuccess: "Usuario activado",
          textSuccess: "El usuario ha sido activado con éxito.",
          titleError: "Error",
          textError: "No se pudo activar el usuario. Intenta nuevamente.",
          icon: "success",
          cancelButtonText: "Cancelar",
          confirmButtonText: "Sí, activar",
          genericFunction: async () => {
            await activeUser(id);
            set((state) => ({
              users: state.users?.map((user: IUser) =>
                user.id === id ? { ...user, disabledAt: null } : user
              ),
            }));
            get().handleApplyFilter(false);
          },
        });
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
      handleLogout: (color: TColor) => {
        PersonalizedPopUp({
          color: color,
          withResult: true,
          title: "¿Estás seguro que deseas cerrar sesión?",
          text: "Podrás volver a ingresar nuevamente más tarde.",
          titleSuccess: "Has cerrado sesión con éxito",
          textSuccess: "Esperamos tu regreso a GF Instalaciones.",
          cancelButtonText: "Cancelar",
          confirmButtonText: "Sí, cerrar sesión",
          genericFunction: () => {
            window.location.href = "/";
            set({ user: null, token: null });
            Cookies.remove("user-storage");
          },
        });
      },
      handleActionMenu: (id: string) => {
        const { actionMenu } = get();
        set({ actionMenu: actionMenu === id ? null : id });
      },
      handleAssignRoleUser: async (
        roleId: Role,
        userId: string,
        color: TColor
      ) => {
        await PersonalizedPopUp({
          color: color,
          withResult: true,
          simpleModal: false,
          title: "¿Deseas añadir el siguiente rol?",
          text: "Podrás eliminarlo cuando lo desees.",
          titleSuccess: "Rol eliminado",
          textSuccess: `Rol ${
            roleId === Role.COORDINADOR ? "coordinador" : "administrador"
          } asignado con éxito.`,
          titleError: "Error",
          textError: "No se pudo asignar el rol. Intenta nuevamente.",
          icon: "success",
          cancelButtonText: "Cancelar",
          confirmButtonText: "Sí, asignar",
          genericFunction: async () => {
            await assignRole(roleId, userId);
            await get().handleFetchUsers();
          },
        });
      },
      handleDeleteRoleUser: async (
        roleId: Role,
        userId: string,
        color: TColor
      ) => {
        await PersonalizedPopUp({
          color: color,
          withResult: true,
          simpleModal: false,
          title: "¿Deseas eliminar el siguiente rol?",
          text: "Podrás asignarlo nuevamente cuando lo desees.",
          titleSuccess: "Rol eliminado",
          textSuccess: `Rol ${
            roleId === Role.COORDINADOR ? "coordinador" : "administrador"
          } eliminado con éxito.`,
          titleError: "Error",
          textError: "No se pudo eliminar el rol. Intenta nuevamente.",
          icon: "success",
          cancelButtonText: "Cancelar",
          confirmButtonText: "Sí, eliminar",
          genericFunction: async () => {
            await deleteRole(roleId, userId);
            await get().handleFetchUsers();
          },
        });
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => {
        if (!state.user || !state.token) return {};
        return { user: state.user, token: state.token };
      },
    }
  )
);
