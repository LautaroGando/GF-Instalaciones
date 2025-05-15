"use client";
import { useUserStore } from "@/store/UserStore/userStore";
import { capitalize } from "@/utils/capitalize";
import { useEffect, useState } from "react";
import { formatDate } from '../utils/formatDate';

export const useUserData = () => {
  const { user } = useUserStore();
  const [userData, setUserData] = useState<
    Record<"key" | "value", string>[] | null
  >(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      const userInfo = "user" in user ? user.user : user;

      setUserData([
        { key: "Nombre completo:", value: userInfo.fullName },
        { key: "Correo electrónico:", value: userInfo.email },
        { key: "Fecha de nacimiento:", value: formatDate(userInfo.birthDate) },
        { key: "Número de documento:", value: userInfo.idNumber },
        { key: "País:", value: capitalize(userInfo.country) },
        {
          key: "Provincia:",
          value: capitalize(userInfo.location).split("_").join(" "),
        },
        { key: "Dirección:", value: userInfo.address },
        {
          key: "Número de teléfono:",
          value: `${userInfo.coverage} ${userInfo.phone}`,
        },
      ]);

      setUserRole(userInfo.userRoles[userInfo.userRoles.length - 1].role.name);
    }
  }, [user]);

  return { user, userData, userRole };
};
