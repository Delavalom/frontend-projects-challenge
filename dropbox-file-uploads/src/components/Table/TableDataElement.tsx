import { ReactNode, type FC } from "react";

type Props = {
  children: ReactNode;
  href?: string;
};

export const TableDataElement: FC<Props> = ({ children, href }) => {
  return (
    <td className="px-6 py-4">
      {href ? (
        <a
          href={href}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          {children}
        </a>
      ) : (
        children
      )}
    </td>
  );
};
