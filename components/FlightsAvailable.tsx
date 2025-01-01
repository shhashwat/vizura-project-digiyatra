import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const FlightsAvailable = () => {
  return (
    <div className='flex items-center justify-center mt-3 flex-col' >
    {/* DROPDOWN FLIGHTS*/}
      <div className='bg-white rounded-md w-[80%] h-[100%] shadow-md p-4 mb-2 flex-row'>
        

        {/* DROPDOWN 1 STARTS*/}
        <div className="flex items-center justify-between p-4">
            <span className="flex justify-center items-center">
              <Image
                src={'/assets/SpiceJet.png'}
                width={125}
                height={125}
                alt='SpiceJet'
              />
            </span>

            <span className="flex items-center justify-between gap-2 flex-row mx-8">

                <div className='flex flex-col'>
                  <span className='h4 text-black' >
                    20:08
                  </span>
                  <span className='text-sm flex justify-end'>DEL</span>
                </div>
                <div className='flex flex-col flex-grow items-center' >
                    <span className='flex justify-center items-center text-sm'>2hr 15min</span>
                    <span>
                    ────────
                    </span>
                    <span className='flex justify-center items-center text-xs'>Non Stop</span>
                </div>
                <div className='flex flex-col'>
                  <span className='h4 text-black' >22:23</span>
                  <span
                  className='text-sm flex justify-start'
                  >
                    DEL
                  </span>
                </div>
            </span>
            <span className="flex flex-col">
              <span className='text-3xl' >
                &#x20B9;7,350
              </span>
              <Button className="relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 hover:opacity-90 active:opacity-80 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg" >
                SELECT
              </Button>
            </span>
          </div>
      </div>
      {/* DROPDOWN 1 ENDS*/}



      <div className='bg-white rounded-md w-[80%] h-[100%] shadow-md p-4 mb-2 flex-row'>
        {/* DROPDOWN 2 STARTS*/}
        <div className="flex items-center justify-between p-4">
            <span className="flex justify-center items-center">
              <Image
                src={'/assets/Indigo.png'}
                width={125}
                height={125}
                alt='SpiceJet'
              />
            </span>

            <span className="flex items-center justify-between gap-2 flex-row mx-8">

                <div className='flex flex-col'>
                  <span className='h4 text-black' >
                    21:08
                  </span>
                  <span className='text-sm flex justify-end'>DEL</span>
                </div>
                <div className='flex flex-col flex-grow items-center' >
                    <span className='flex justify-center items-center text-sm'>2hr 15min</span>
                    <span>
                    ────────
                    </span>
                    <span className='flex justify-center items-center text-xs'>Non Stop</span>
                </div>
                <div className='flex flex-col'>
                  <span className='h4 text-black' >23:23</span>
                  <span
                  className='text-sm flex justify-start'
                  >
                    DEL
                  </span>
                </div>
            </span>
            <span className="flex flex-col">
              <span className='text-3xl' >
                &#x20B9;7,650
              </span>
              <Button className="relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 hover:opacity-90 active:opacity-80 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg" >
                SELECT
              </Button>
            </span>
          </div>
      </div>
      {/* DROPDOWN 2 ENDS*/}


      <div className='bg-white rounded-md w-[80%] h-[100%] shadow-md p-4 mb-2 flex-row'>
        {/* DROPDOWN 3 STARTS*/}
        <div className="flex items-center justify-between p-4">
            <span className="flex justify-center items-center">
              <Image
                src={'/assets/AkasaAir.png'}
                width={125}
                height={125}
                alt='SpiceJet'
              />
            </span>

            <span className="flex items-center justify-between gap-2 flex-row mx-8">

                <div className='flex flex-col'>
                  <span className='h4 text-black' >
                    14:08
                  </span>
                  <span className='text-sm flex justify-end'>DEL</span>
                </div>
                <div className='flex flex-col flex-grow items-center' >
                    <span className='flex justify-center items-center text-sm'>2hr 15min</span>
                    <span>
                    ────────
                    </span>
                    <span className='flex justify-center items-center text-xs'>Non Stop</span>
                </div>
                <div className='flex flex-col'>
                  <span className='h4 text-black' >16:23</span>
                  <span
                  className='text-sm flex justify-start'
                  >
                    DEL
                  </span>
                </div>
            </span>
            <span className="flex flex-col">
              <span className='text-3xl' >
                &#x20B9;8,180
              </span>
              <Button className="relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 hover:opacity-90 active:opacity-80 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg" >
                SELECT
              </Button>
            </span>
          </div>
      </div>
      {/* DROPDOWN 3 ENDS*/}


      <div className='bg-white rounded-md w-[80%] h-[100%] shadow-md p-4 mb-2 flex-row'>
        {/* DROPDOWN 4 STARTS*/}
        <div className="flex items-center justify-between p-4">
            <span className="flex justify-center items-center">
              <Image
                src={'/assets/AirIndia.png'}
                width={125}
                height={125}
                alt='SpiceJet'
              />
            </span>

            <span className="flex items-center justify-between gap-2 flex-row mx-8">

                <div className='flex flex-col'>
                  <span className='h4 text-black' >
                    17:08
                  </span>
                  <span className='text-sm flex justify-end'>DEL</span>
                </div>
                <div className='flex flex-col flex-grow items-center' >
                    <span className='flex justify-center items-center text-sm'>2hr 15min</span>
                    <span>
                    ────────
                    </span>
                    <span className='flex justify-center items-center text-xs'>Non Stop</span>
                </div>
                <div className='flex flex-col'>
                  <span className='h4 text-black' >19:23</span>
                  <span
                  className='text-sm flex justify-start'
                  >
                    DEL
                  </span>
                </div>
            </span>
            <span className="flex flex-col">
              <span className='text-3xl' >
                &#x20B9;8,350
              </span>
              <Button className="relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 hover:opacity-90 active:opacity-80 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg" >
                SELECT
              </Button>
            </span>
          </div>
      </div>
      {/* DROPDOWN 4 ENDS*/}
    </div>
  )
}

export default FlightsAvailable