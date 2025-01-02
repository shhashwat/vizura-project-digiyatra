"use client";

import FaceCapture from '@/components/FaceCapture'
import PersonDetails from '@/components/PersonDetails'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const PassengerDetails = () => {
  const [submit, setSubmit] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    setSubmit(true);
    router.push('/select-seats');
  };

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
              <Button className="mt-4 mb-2 px-3 py-1 text-white text-xs font-medium rounded-md bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 transform transition-transform duration-300 hover:scale-110 active:scale-110"
              onClick={() => handleSubmit()}
              >
                Submit
              </Button>
              {submit && (
                <Button className="mt-2 mb-4 px-3 py-1 text-white text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 transform transition-transform duration-300 hover:scale-110 active:scale-110" >
                  Next Step
                </Button>
              )}
            </div>
          </div>     
      </div>
    </div>
  )
}

export default PassengerDetails