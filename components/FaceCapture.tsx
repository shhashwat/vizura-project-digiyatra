import Image from 'next/image'
import React from 'react'
import TakePictures from "@/components/TakePictures";

const FaceCapture = () => {
  return (
    <div className='border border-black rounded-md mt-10 mb-10 bg-gray-100 p-10' >
      <div className="flex items-center justify-start gap-2 mb-4">
        <p className='text-start text-gray-800 font-bold text-md'>
          Capture your face from different angles
        </p>
        {/*HOVER TEXT*/}
        <div className="relative group">
          <Image
            src={'/assets/icons/info.png'}
            width={24}
            height={24} 
            alt='Info'
            />
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Open the webcam, click and hold the button, then rotate your face from left to right and back to left for accurate results.
          </span>
        </div>
      </div>

      {/*GIF*/}
      <div className="flex items-center justify-center p-4">
        <Image
          src="/assets/rotateface.gif" 
          alt="Descriptive Alt Text" 
          width={200}
          height={200}
          className="rounded-lg shadow-md outline-2"
          />
        </div>

        {/*WEBCAM BUTTON*/}
        <TakePictures/>
        {/*PROGRESS BAR*/}
    </div>
  )
}

export default FaceCapture