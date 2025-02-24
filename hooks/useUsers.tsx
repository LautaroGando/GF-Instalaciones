"use client";

import { IUser } from "@/interfaces/IUser";
import { findUsers } from "@/services/users";
import { useEffect, useState } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await findUsers();

      setUsers(users);
    };

    fetchUsers();
  }, []);

  return { users };
};
