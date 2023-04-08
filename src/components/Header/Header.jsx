import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon , Bars3Icon } from '@heroicons/react/24/solid'
const Header = () => {
    const [isMenuOpen , setIsMenuOpen]=useState(false)
    return (
        <div className='flex justify-between items-center mx-auto lg:mx-20 bg-slate-200  p-4'>
            <Link to='/' className='flex items-center gap-2'>
                <span>
                    <BoltIcon className='w-6 h-6 text-blue-600'></BoltIcon>
                </span>
                <h2 className=' text-xl font-bold'>nextPage </h2>
            </Link>

           <ul className='hidden lg:flex items-center gap-4 font-bold'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/books">Books</NavLink>
            </li>
            <li>
                <NavLink to="/about">About us</NavLink>
            </li>
           </ul>

          <div className='lg:hidden' >
          <button
           onClick={()=>{setIsMenuOpen(true)}} >
          <Bars3Icon className='w-7 border-2 border-blue-300 rounded'></Bars3Icon>
          </button>


          </div>
        </div>
        
    );
};

export default Header;