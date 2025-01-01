import VerifyPassengers from '@/components/VerifyPassengers'
import React from 'react'

const SelfChcekIn = () => {
  return (
    <div className='flight-background2 flex items-center flex-col'>
      <div className='flex items-center justify-center flex-col gap-10 mt-5'>
        <p className='h1'>One Last Step to Fly</p>
        <VerifyPassengers/>
      </div>
    </div>
  )
}

export default SelfChcekIn