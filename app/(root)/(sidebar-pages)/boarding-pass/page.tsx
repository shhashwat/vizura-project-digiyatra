"use client";

import BoardingPassModal from '@/components/BoardingPassModal'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const BoardingPass = () => {
  const planeSeats = JSON.parse(localStorage.getItem("Seats") || "[]");
  const seat1Obj = planeSeats[0];
  const seat2Obj = planeSeats[1];

  const seat1 = seat1Obj ? `${seat1Obj.row}${seat1Obj.column}` : "undefined";
  const seat1Group = seat1Obj ? `${seat1Obj.row}` : "undefined";

  const seat2 = seat2Obj ? `${seat2Obj.row}${seat2Obj.column}` : "undefined";
  const seat2Group = seat2Obj ? `${seat2Obj.row}` : "undefined";

  const date = localStorage.getItem("Date");

  const userString1 = localStorage.getItem(`person1`);
  const userObject1 = userString1 ? JSON.parse(userString1) : "undefined";
  const name1 = userObject1 ? `${userObject1.firstName}` : "undefined";
  const lastName1 = userObject1 ? `${userObject1.lastName}` : "undefined";

  const userString2 = localStorage.getItem(`person2`);
  const userObject2 = userString2 ? JSON.parse(userString2) : "undefined";
  const name2 = userObject2 ? `${userObject2.firstName}` : "undefined";
  const lastName2 = userObject2 ? `${userObject2.lastName}` : "undefined";

  return (
    <div className='flight-background2' >
      <div className='flex items-center justify-center flex-col gap-10 mt-12'>
        <p className='h1'>Collect Your Boarding Pass</p>
        <div className='flex items-center justify-center flex-col gap-2'>
          <div className='flex items-center justify-center flex-row' >
            <p className='mr-2'>{name1}:</p>
            <BoardingPassModal firstName={name1} lastName={lastName1} date={date} seat={seat1} seatGroup={seat1Group}/>
          </div>
          <div className='flex items-center justify-center flex-row'>
            <p className='mr-2' >{name2}:</p>
            <BoardingPassModal firstName={name2} lastName={lastName2} date={date} seat={seat2} seatGroup={seat2Group}/>
          </div>
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