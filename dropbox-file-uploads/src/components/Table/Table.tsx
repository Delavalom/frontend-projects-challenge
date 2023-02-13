import { type FC } from "react";
import { SearchBar } from "./SearchBar";
import { TableCheckbox } from "./TableCheckbox";
import { TableHeaderElement } from "./TableHeaderElement";
import { TableDataElement } from "./TableDataElement";
import { TableRow } from "./TableRow";

type Props = {};

export const Table: FC<Props> = ({}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <SearchBar />
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <TableRow className="">
            <TableCheckbox isTableHeader />
            <TableHeaderElement>Name</TableHeaderElement>
            <TableHeaderElement>Extension</TableHeaderElement>
            <TableHeaderElement>Size</TableHeaderElement>
            <TableHeaderElement>Action</TableHeaderElement>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCheckbox />
            <TableHeaderElement scope="row">
              Employees Data
            </TableHeaderElement>
            <TableDataElement>.txt</TableDataElement>
            <TableDataElement>2mb</TableDataElement>
            <TableDataElement href="#">Delete </TableDataElement>
          </TableRow>
          <TableRow>
            <TableCheckbox />
            <TableHeaderElement scope="row">
              Income Data
            </TableHeaderElement>
            <TableDataElement>.txt</TableDataElement>
            <TableDataElement>1mb</TableDataElement>
            <TableDataElement href="#">Delete</TableDataElement>
          </TableRow>
        </tbody>
      </table>
    </div>
  );
};
