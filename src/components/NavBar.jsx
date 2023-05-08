import React from 'react'

import { logo, close, menu } from '../assets'
import { navlinks } from '../constants'
import { useState } from 'react'

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar z-10'>
      <img src={logo} alt='luxling' className='w-[24px] h-[24px]' />
      <ul className='list-none sm:flex hidden justify-end items-center'>
        {navlinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navlinks.length - 1 ? 'mr-0':'mr-10'} text-white`}>
            <a href={`#${nav.id}`}>{nav.text}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt='menu' className='w-[24px] h-[24px] object-contain' onClick={() => setToggle(!toggle)} />
        <div className={`${toggle?'flex':'hidden'} w-full absolute top-16 right-0`}>
          <ul className='list-none flex flex-col justify-end items-end bg-primary w-full p-4 pr-8 shadow-2xl shadow-[#000a]'>
            {navlinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] my-3 text-white`}>
                <a href={`#${nav.id}`}>{nav.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
