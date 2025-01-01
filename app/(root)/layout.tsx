import Sidebar from '@/components/Sidebar';
import React from 'react'

export const dynamic = 'force-dynamic';

const Layout = async ( {children}:{children: React.ReactNode} ) => {

  return (
    <main className='flex h-screen p-4 bg-gray-100'>
        <Sidebar />

        <section>
            <div className='w-full h-full'>
              <div className='p-4 h-full overflow-y-scroll box-border'>
                  {children}
              </div>
            </div>
        </section>
    </main>
  );
}

export default Layout