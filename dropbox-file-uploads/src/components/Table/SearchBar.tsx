import { type FC } from "react";
import {Search} from 'lucide-react'

type Props = {};

export const SearchBar: FC<Props> = ({}) => {
  return (
    <div className="flex items-center justify-between pb-4">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search />
        </div>
        <input
          type="text"
          id="table-search"
          className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search files"
        />
      </div>
    </div>
  );
};
