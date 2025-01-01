import FaceCapture from '@/components/FaceCapture'
import PersonDetails from '@/components/PersonDetails'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const PassengerDetails = () => {
  return (
    <div className='flight-background'>
      <div className="flex flex-col justify-center items-center">
          <div className='bg-white rounded-md w-[30%] h-[105%] shadow-md p-4' >

            <header className='flex items-center justify-center flex-col'>
              <Image
              src={'/assets/icons/user.png'}
              width={45}
              height={45}
              alt='User'
              />
              <p className='h2' >Enter Details</p>
            </header>
            <div className='flex justify-center items-center flex-col'>
              <PersonDetails person={1}/>
              <FaceCapture/>
              <PersonDetails person={2}/>
              <FaceCapture/>
              <Button>
                Submit
              </Button>
            </div>
          </div>     
      </div>
    </div>
  )
}

export default PassengerDetails