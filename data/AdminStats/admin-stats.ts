import { IUser } from "@/interfaces/IUser";

export const userStats = (users: IUser[] | null) => {
  const data = [
    { name: "Total:", value: users && users.length, color: "#000000" },
    {
      name: "Admin:",
      value:
        users &&
        users.filter(
          (user: IUser) =>
            user.userRoles[0] && user.userRoles[0].role.name === "Admin"
        ).length,
      color: "#A79351",
    },
    {
      name: "Coordinador:",
      value:
        users &&
        users.filter(
          (user: IUser) =>
            user.userRoles[0] && user.userRoles[0].role.name === "Coordinador"
        ).length,
      color: "#A7935166",
    },
    {
      name: "Instalador:",
      value:
        users &&
        users.filter(
          (user: IUser) =>
            user.userRoles[0] && user.userRoles[0].role.name === "Instalador"
        ).length,
      color: "#A79351B3",
    },
    {
      name: "Usuario:",
      value:
        users &&
        users.filter(
          (user: IUser) =>
            user.userRoles[0] && user.userRoles[0].role.name === "Usuario"
        ).length,
      color: "#A79351",
    },
  ];

  return data;
};

export const orderStats = () => {
  const regions = [
    {
      title: "Total",
      data: [{ name: "Total:", value: 1, color: "#000000", isTotal: true }],
    },
    {
      title: "CABA/GBA",
      data: [
        { name: "CABA:", value: 250, color: "#A79351" },
        { name: "GBA:", value: 50, color: "#A7935166" },
      ],
    },
    {
      title: "Zona Norte",
      data: [
        { name: "Jujuy:", value: 100, color: "#A79351" },
        { name: "Formosa:", value: 40, color: "#A7935166" },
        { name: "Salta:", value: 90, color: "#A79351B3" },
        { name: "Chaco:", value: 120, color: "#A79351" },
        { name: "Misiones:", value: 60, color: "#A7935166" },
        { name: "La Rioja:", value: 80, color: "#A79351B3" },
        { name: "Corrientes:", value: 110, color: "#A79351" },
        { name: "Tucumán:", value: 70, color: "#A7935166" },
        { name: "Santiago del Estero:", value: 50, color: "#A7935140" },
        { name: "Catamarca:", value: 30, color: "#A7935140" },
      ],
    },
    {
      title: "Zona Centro",
      data: [
        { name: "Entre Ríos:", value: 200, color: "#A79351" },
        { name: "Córdoba:", value: 80, color: "#A7935166" },
        { name: "Santa Fe:", value: 90, color: "#A79351B3" },
        { name: "San Juan:", value: 50, color: "#A7935166" },
        { name: "San Luis:", value: 40, color: "#A7935140" },
        { name: "Mendoza:", value: 70, color: "#A7935166" },
        { name: "La Pampa:", value: 30, color: "#A7935140" },
      ],
    },
    {
      title: "Zona Sur",
      data: [
        { name: "Neuquén:", value: 190, color: "#A79351" },
        { name: "Tierra del Fuego:", value: 60, color: "#A7935166" },
        { name: "Santa Cruz:", value: 50, color: "#A7935140" },
        { name: "Chubut:", value: 40, color: "#A7935166" },
        { name: "Río Negro:", value: 30, color: "#A7935140" },
      ],
    },
  ];

  return regions;
};

export const articleStats = () => {
  const data = [
    { name: "Total:", value: 337, color: "#000000" },
    { name: "Premium:", value: 250, color: "#A79351" },
    { name: "Plantilla 1:", value: 180, color: "#A79351B3" },
    { name: "Plantilla 2:", value: 140, color: "#A7935166" },
    { name: "Plantilla 3:", value: 120, color: "#A7935140" },
  ];

  return data;
};
