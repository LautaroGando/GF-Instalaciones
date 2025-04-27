import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import clsx from "clsx";
import { useEffect } from "react";
import { IOrderProgressProps } from "./types";

const OrderProgressBar: React.FC<IOrderProgressProps> = ({
  completed,
  total,
  isComplete = completed === total,
  className = "",
}) => {
  const percentage = (completed / total) * 100;
  const progress = useMotionValue(0);
  const width = useTransform(progress, (v) => `${v}%`);

  useEffect(() => {
    animate(progress, percentage, {
      duration: 1.5,
      delay: .5,
      ease: "easeInOut",
    });
  }, [percentage, progress]);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
      className={clsx("mt-2", className)}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        }}
        className="flex justify-between text-xs text-gray-500 font-medium mb-1"
      >
        <span>Instalaciones completadas</span>
        <span>
          {completed}/{total}
        </span>
      </motion.div>

      {!isComplete ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
        >
          <motion.div style={{ width }} className="h-full rounded-full bg-admin-activeColor/70" />
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-2 text-sm font-semibold text-admin-activeColor rounded-md py-1 w-fit"
        >
          Instalaciones completadas al 100%
        </motion.p>
      )}
    </motion.div>
  );
};

export default OrderProgressBar;
