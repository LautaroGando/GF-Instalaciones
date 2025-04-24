import clsx from "clsx";
import { IOrderProgressProps } from "./types";

const OrderProgressBar: React.FC<IOrderProgressProps> = ({
  completed,
  total,
  isComplete = completed === total,
  className = "",
}) => {
  const percentage = (completed / total) * 100;

  return (
    <div className={clsx("mt-2", className)}>
      <div className="flex justify-between text-xs text-gray-500 font-medium mb-1">
        <span>Instalaciones completadas</span>
        <span>
          {completed}/{total}
        </span>
      </div>

      {!isComplete ? (
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-200 bg-admin-activeColor/70 group-hover:bg-admin-activeColor"
            style={{ width: `${percentage}%` }}
          />
        </div>
      ) : (
        <p className="mt-2 text-sm font-semibold text-admin-activeColor rounded-md py-1 w-fit">
          Instalaciones completadas al 100%
        </p>
      )}
    </div>
  );
};

export default OrderProgressBar;
