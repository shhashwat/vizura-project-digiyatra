import Seats from '@/components/Seats'
import React from 'react'

const SelectSeats = () => {
  return (
    <div className='flight-background-plane' >
      <div className='flex items-center justify-center flex-col' >
        {/*TITLE*/}
        <p className='h1 text-black mb-11'>
          <span className='text-black'>
            Select 2 Seats
          </span>
        </p>
        {/*SEATS*/}
        
        {/*ROW 1*/}
        <div className='flex items-center justify-center flex-row scale-50 translate-y-20 translate-x-4'>
          <div className='flex gap-2 items-center justify-center flex-row'>
            <div className='flex gap-10 items-center justify-center flex-row'>
              <Seats column={"left"} />
              <Seats column={"right"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectSeats