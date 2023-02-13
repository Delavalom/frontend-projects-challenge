import { type FC } from 'react';
import {Home} from "lucide-react"

type Props = {};

export const Sidebar: FC<Props> = ({}) => {

  return (
        <aside className="flex flex-col px-8 py-8 items-center border-r-2">
          <nav className='flex flex-col justify-between items-center'>
            <button className='flex items-center gap-2 text-xl'>
                Home
                <Home />
            </button>
          </nav>
        </aside>
  );
};
