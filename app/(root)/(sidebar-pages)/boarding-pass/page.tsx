import BoardingPassModal from '@/components/BoardingPassModal'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const BoardingPass = () => {
  return (
    <div className='flight-background2' >
      <div className='flex items-center justify-center flex-col gap-10 mt-12'>
        <p className='h1'>Collect Your Boarding Pass</p>
        <div className='flex items-center justify-center flex-col gap-2'>
          <BoardingPassModal/>
          <BoardingPassModal/>
        </div>
        <Button className='px-3 py-1 text-white text-xs font-medium rounded-md bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 transform transition-transform duration-300 hover:scale-110 active:scale-110'>
          <Link
          href={'/self-check-in'}
          >
            Check In
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default BoardingPass