import { ReactNode, type FC } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const TableRow: FC<Props> = ({
  children,
  className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
}) => {
  return <tr className={className}>{children}</tr>;
};
