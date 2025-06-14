import IInstallation from "@/interfaces/IInstallation";
import { IUser } from "@/interfaces/IUser";

export const userStats = (users: IUser[] | null) => {
  const data = [
    { name: "Total:", value: users && users.length, color: "#000000" },
    {
      name: "Admin:",
      value:
        users &&
        users.filter((user: IUser) =>
          user.userRoles.find((user) => user.role.name === "Admin")
        ).length,
      color: "#A79351",
    },
    {
      name: "Coordinador:",
      value:
        users &&
        users.filter((user: IUser) =>
          user.userRoles.find((user) => user.role.name === "Coordinador")
        ).length,
      color: "#A7935166",
    },
    {
      name: "Instalador:",
      value:
        users &&
        users.filter((user: IUser) =>
          user.userRoles.find((user) => user.role.name === "Instalador")
        ).length,
      color: "#A79351B3",
    },
    {
      name: "Usuario:",
      value:
        users &&
        users.filter((user: IUser) =>
          user.userRoles.find((user) => user.role.name === "Usuario")
        ).length,
      color: "#A79351",
    },
  ];

  return data;
};

export const orderStats = (installations: IInstallation[]) => {
  const provinceCount: Record<string, number> = {};

  installations.forEach((installation: IInstallation) => {
    const province = installation.address.city.province.name;
    provinceCount[province] = (provinceCount[province] || 0) + 1;
  });

  const regions = [
    {
      title: "Total",
      data: [
        {
          name: "Total:",
          value: installations.length,
          color: "#000000",
          isTotal: true,
        },
      ],
    },
    {
      title: "CABA/GBA",
      data: [
        {
          name: "CABA:",
          value: provinceCount["CABA-GBA"] || 0,
          color: "#A79351",
        },
        {
          name: "GBA:",
          value: provinceCount["Buenos Aires"] || 0,
          color: "#A7935166",
        },
      ],
    },
    {
      title: "Zona Norte",
      data: [
        {
          name: "Jujuy:",
          value: provinceCount["Jujuy"] || 0,
          color: "#A79351",
        },
        {
          name: "Formosa:",
          value: provinceCount["Formosa"] || 0,
          color: "#A7935166",
        },
        {
          name: "Salta:",
          value: provinceCount["Salta"] || 0,
          color: "#A79351B3",
        },
        {
          name: "Chaco:",
          value: provinceCount["Chaco"] || 0,
          color: "#A79351",
        },
        {
          name: "Misiones:",
          value: provinceCount["Misiones"] || 0,
          color: "#A7935166",
        },
        {
          name: "La Rioja:",
          value: provinceCount["La Rioja"] || 0,
          color: "#A79351B3",
        },
        {
          name: "Corrientes:",
          value: provinceCount["Corrientes"] || 0,
          color: "#A79351",
        },
        {
          name: "Tucumán:",
          value: provinceCount["Tucumán"] || 0,
          color: "#A7935166",
        },
        {
          name: "Santiago del Estero:",
          value: provinceCount["Santiago del Estero"] || 0,
          color: "#A7935140",
        },
        {
          name: "Catamarca:",
          value: provinceCount["Catamarca"] || 0,
          color: "#A7935140",
        },
      ],
    },
    {
      title: "Zona Centro",
      data: [
        {
          name: "Entre Ríos:",
          value: provinceCount["Entre Ríos"] || 0,
          color: "#A79351",
        },
        {
          name: "Córdoba:",
          value: provinceCount["Córdoba"] || 0,
          color: "#A7935166",
        },
        {
          name: "Santa Fe:",
          value: provinceCount["Santa Fe"] || 0,
          color: "#A79351B3",
        },
        {
          name: "San Juan:",
          value: provinceCount["San Juan"] || 0,
          color: "#A7935166",
        },
        {
          name: "San Luis:",
          value: provinceCount["San Luis"] || 0,
          color: "#A7935140",
        },
        {
          name: "Mendoza:",
          value: provinceCount["Mendoza"] || 0,
          color: "#A7935166",
        },
        {
          name: "La Pampa:",
          value: provinceCount["La Pampa"] || 0,
          color: "#A7935140",
        },
      ],
    },
    {
      title: "Zona Sur",
      data: [
        {
          name: "Neuquén:",
          value: provinceCount["Neuquén"] || 0,
          color: "#A79351",
        },
        {
          name: "Tierra del Fuego:",
          value: provinceCount["Tierra del Fuego"] || 0,
          color: "#A7935166",
        },
        {
          name: "Santa Cruz:",
          value: provinceCount["Santa Cruz"] || 0,
          color: "#A7935140",
        },
        {
          name: "Chubut:",
          value: provinceCount["Chubut"] || 0,
          color: "#A7935166",
        },
        {
          name: "Río Negro:",
          value: provinceCount["Río Negro"] || 0,
          color: "#A7935140",
        },
      ],
    },
  ];

  return regions;
};

export const articleStats = () => {
  const data = [
    { name: "Total:", value: 0, color: "#000000" },
    { name: "Premium:", value: 0, color: "#A79351" },
    { name: "Plantilla 1:", value: 0, color: "#A79351B3" },
    { name: "Plantilla 2:", value: 0, color: "#A7935166" },
    { name: "Plantilla 3:", value: 0, color: "#A7935140" },
  ];

  return data;
};
