import { type FC } from "react";

type Props = {
  isTableHeader?: true;
};

export const TableCheckbox: FC<Props> = ({ isTableHeader }) => {
  return (
    <>
      {isTableHeader ? (
        <th className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-all-search-or-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-all-search" className="sr-only">
              checkbox
            </label>
          </div>
        </th>
      ) : (
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-all-search-or-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-all-search" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
      )}
    </>
  );
};
