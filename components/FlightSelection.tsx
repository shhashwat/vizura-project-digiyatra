import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import Image from 'next/image'

const FlightSelection = () => {
  return (
    <div className='bg-white rounded-md w-[95%] h-[105%] shadow-md p-4'>
      <Input type='text' placeholder='From' className='inline-block w-[25%] m-2'/>
      <Button className='relative overflow-hidden rounded-full bg-transparent hover:bg-transparent hover:bg-gray-100 active:bg-gray-150 transition-color duration-1000 ease-linear shadow-none'>
        <Image
        src={'/assets/icons/swap.png'}
        width={24}
        height={24}
        alt='Swap'
        />
      </Button>
      <Input type='text' placeholder='To' className='inline-block w-[25%] m-2'/>
      <Input type={'date'} className='inline-block w-[30%] m-2'/>
      <Button className="relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 hover:opacity-90 active:opacity-80 transition-all duration-300 ease-in-out transform hover:scale-110 shadow-md hover:shadow-lg translate-y-2 " >
        <Image
        src={'/assets/icons/search.png'}
        width={24}
        height={24}
        alt='Search'
        />
      </Button>
    </div>
  )
}

export default FlightSelection