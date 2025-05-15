import type { TAdminSection } from "@/types/TAdmin";

export interface IAdminNotificationStoreProps {
  openNotifications: boolean;
  handleToggle: (section: TAdminSection) => void;
  handleClose: () => void;
}
