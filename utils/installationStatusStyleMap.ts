import TInstallationStatus from "@/types/TInstallationStatus";

export const statusStyleMap: Record<
  TInstallationStatus,
  {
    text: string;
    bg: string;
    border: string;
  }
> = {
  Pendiente: {
    text: "#A79351B3",
    bg: "#A79351B3",
    border: "#A79351B3",
  },
  "En proceso": {
    text: "#A79351",
    bg: "#A79351",
    border: "#A79351",
  },
  "A revisar": {
    text: "#009DFF",
    bg: "#009DFF",
    border: "#009DFF",
  },
  Finalizada: {
    text: "#28b463",
    bg: "#28b463",
    border: "#28b463",
  },
  Rechazada: {
    text: "#28b463",
    bg: "#28b463",
    border: "#28b463",
  },
  Cancelada: {
    text: "#E17575",
    bg: "#E17575",
    border: "#E17575",
  },
  Pospuesta: {
    text: "#FF9F4B",
    bg: "#FF9F4B",
    border: "#FF9F4B",
  },
};
