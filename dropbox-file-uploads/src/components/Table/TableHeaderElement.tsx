import { ReactNode, type FC } from "react";

type Props = {
    children: ReactNode
    scope?: "col" | "row"
};

export const TableHeaderElement: FC<Props> = ({children, scope = "col"}) => {
  return (
    <th scope="col" className="px-6 py-3">
      {children}
    </th>
  );
};
