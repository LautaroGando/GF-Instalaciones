"use client";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import { useUserStore } from "@/store/UserStore/userStore";
import React, { useEffect, useState } from "react";
import UserRow from "./UserRow/UserRow";
import UserTableHeader from "./UserTableHeader/UserTableHeader";
import EmptyState from "@/components/ui/AdminComponents/EmptyState/EmptyState";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";

export const UsersTable: React.FC = () => {
  const { filterUsers, isLoading, page, handleFetchUsers } = useUserStore();
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await handleFetchUsers();
      setTimeout(() => {
        setIsLoadingUsers(false);
      }, 500);
    };

    fetchData();
  }, [handleFetchUsers]);

  if (isLoading || isLoadingUsers) {
    return (
      <div className="flex items-center justify-center min-h-[770px]">
        <Loading theme="light" />
      </div>
    );
  }

  if (!filterUsers || filterUsers.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <EmptyState
          icon={faUserSlash}
          title="No hay usuarios registrados"
          text="Aún no se han añadido usuarios. Intenta más tarde o ajusta los filtros."
        />
      </div>
    );
  }

  return (
    <div className="w-full h-[max-content] min-h-[610px] overflow-x-auto">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-full">
          <Loading theme="light" />
        </div>
      ) : (
        <table className="text-sm text-left w-full border-collapse">
          <UserTableHeader />
          <tbody>
            {filterUsers.slice((page - 1) * 10, page * 10).map((item) => (
              <UserRow key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersTable;
