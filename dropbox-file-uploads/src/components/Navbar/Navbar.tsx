import { type FC } from 'react';
import {FileQuestion, Droplet} from 'lucide-react'

type Props = {};

export const Navbar: FC<Props> = ({}) => {

  return (
    <header className='flex items-center justify-between w-full h-fit px-16 py-4 border-b-2'>
        <div className='flex items-center gap-6'>
            <Droplet className='w-8 h-8' />
            <h1 className='text-3xl'>Dropbox</h1>
        </div>
        <nav>
            <input type="search" name="" id="" />
        </nav>
        <picture>
            <FileQuestion />
        </picture>
    </header>
  );
};
