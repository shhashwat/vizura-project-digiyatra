"use client";

import Sidebar from '@/components/Sidebar';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react'

export const dynamic = 'force-dynamic';

const Layout = async ( {children}:{children: React.ReactNode} ) => {
  const pathname = usePathname();
  const isLastPage = pathname === '/conclusion';

  return (
    <main className='flex h-screen p-4 bg-gray-100'>
        <Sidebar />

        <section
          className={cn(
            "flex-1 h-full overflow-hidden",
            pathname !== "/conclusion" && "bg-cover bg-center bg-no-repeat rounded-md",
          )}
          style={{
            backgroundImage: 
            pathname !== "/conclusion"
             ? `url('https://i0.wp.com/allpicts.in/wp-content/uploads/2016/03/Airplane-Images-with-Beautiful-Picture-of-Flight-in-Sunset.jpg?w=2280&ssl=1')`
             : "none",
          }}
        >
            <div className='w-full flex h-screen'>
              <div >
                  {children}
              </div>
            </div>
        </section>
    </main>
  );
}

export default Layout