"use client";

import React from 'react'
import { navItems } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className='w-1/4 flex h-screen'>
      <div className='h-[95%] w-[95%] p-4 border rounded-lg bg-white shadow-md'>
        <nav>
          <ul className='flex flex-col p-4 gap-4' >
            {navItems.map(({url,name})=>(
              <Link key={name} href={url}>
                <li className={cn(
              "cursor-pointer hover:bg-gradient-to-r hover:from-pink-300 hover:via-red-300 hover:to-orange-300 hover:text-white hover:p-3 hover:rounded-md transition duration-1000 ease-in-out",
              pathname === url && "bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white p-3 rounded-md"
              )}>
                  <p>{name}</p>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar