import React from 'react';
import Logo from './logo';
import { navLinks } from '../config/config';

export const Navbar = () => {
    return (
      <nav className=" border-gray-200 max-w-screen-xl flex flex-wrap items-center justify-center sm:justify-between mx-auto py-4">
          <a href="/"><Logo /></a>
          <div className='mt-2'>
            { navLinks.map(navLink => <a key={navLink.label} href={navLink.href} className='text-white mx-2 px-5 rounded-md py-2 hover:text-gray-200 hover:bg-gray-600/20'>{navLink.label}</a>) }
          </div>
          <div className='hidden sm:block'></div>
      </nav>
    );
};


