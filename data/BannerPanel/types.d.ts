import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface IBannerPanel {
  icon: IconDefinition;
  label: string;
  quantity: Promise<number>;
}
