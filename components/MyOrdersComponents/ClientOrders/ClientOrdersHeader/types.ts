interface IClientOrdersHeaderProps {
  finalCount: number;
  contentToShow: string;
  onViewChange: (value: "in process" | "completed") => void;
}
export default IClientOrdersHeaderProps;
