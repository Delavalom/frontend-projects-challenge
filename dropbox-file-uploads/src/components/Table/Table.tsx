import { useContext, type FC } from "react";
import { SearchBar } from "./SearchBar";
import { TableCheckbox } from "./TableCheckbox";
import { TableHeaderElement } from "./TableHeaderElement";
import { TableDataElement } from "./TableDataElement";
import { TableRow } from "./TableRow";
import { UploadContext } from "../../context/UploadContext";

type Props = {};

export const Table: FC<Props> = ({}) => {
  const upload = useContext(UploadContext);
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
          {upload?.files.files.map((file, idx) => (
            <TableRow key={idx}>
              <TableCheckbox />
              <TableHeaderElement scope="row">{file.name}</TableHeaderElement>
              <TableDataElement>{file.type}</TableDataElement>
              <TableDataElement>{`${(file.size / 1024).toFixed()} Kb`}</TableDataElement>
              <TableDataElement href="#">Delete</TableDataElement>
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};
