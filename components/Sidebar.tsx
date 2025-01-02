"use client";

import React, { useState } from 'react'
import { navItems } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import Image from 'next/image';


const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <aside className="flex items-center h-full bg-white border rounded-md shadow-md" >
      <Sheet key={"left"} open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <div className="relative group">
              <Image
                src={"/assets/icons/right.png"}
                width={24}
                height={24}
                alt="Menu"
                />
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Open Sidebar
              </span>
            </div>
          </SheetTrigger>
        <SheetContent side={"left"} >
            <SheetTitle></SheetTitle>
            <div className="absolute inset-0 right-4 flex items-center justify-end opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:pointer-events-none data-[state=open]:bg-secondary">
              <div className="relative group">
                <Image
                  src="/assets/icons/back.png"
                  width={24}
                  height={24}
                  alt="Close"
                  className="h-4 w-4"
                  onClick={toggleSidebar}
                />
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Close Sidebar
                </span>
              </div>
              </div>
            <div className='h-[95%] w-[95%] bg-white'>
              <nav className='relative z-20' >
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
        </SheetContent>
    </Sheet>
    </aside>
  )
}

export default Sidebar