import type { TAdminSection } from "@/types/TAdmin";

export interface IAdminNotificationStoreProps {
  openNotifications: boolean;
  openMessages: boolean;
  handleToggle: (section: TAdminSection) => void;
  handleClose: () => void;
}
