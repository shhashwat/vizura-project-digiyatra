import React from 'react'

export const dynamic = 'force-dynamic';

const Layout = async ( {children}:{children: React.ReactNode} ) => {

  return <main className='p-4 bg-gray-100'>
        <div>
            {children}
        </div>
  </main>
}

export default Layout