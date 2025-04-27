import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface IClientEmptyStateProps {
  icon: IconDefinition;
  title: string;
  description: string;
  showBackButton?: boolean;
  backButtonText?: string;
}

