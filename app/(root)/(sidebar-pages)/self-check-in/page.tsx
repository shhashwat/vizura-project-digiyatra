"use client";

import BPMConfirmed from '@/components/BPMConfirmed';
import VerifyPassengers from '@/components/VerifyPassengers'
import React, { useState } from 'react'

const SelfChcekIn = () => {
  //local storage
  const arrival = localStorage.getItem("Arrival");
  const departure = localStorage.getItem("Departure");
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

  //USE-STATE
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {

    setTimeout(() => {
      setIsModalOpen(true);
    }, 8500);
  };

  return (
    <div className='flight-background2 flex items-center flex-col'>
      <div className='flex items-center justify-center flex-col gap-10 mt-5'
      onClick={() => handleOpen()}
      >
        <p className='h1'>One Last Step to Fly</p>
        {!isModalOpen ? <VerifyPassengers/> : (
          <div className='flex items-center justify-center flex-col gap-4'>
            <div className='flex items-center justify-center flex-row gap-4'>
              <p>
                {name1}'s confirmed Boarding Pass:
              </p>
              <BPMConfirmed firstName={name1} lastName={lastName1} date={date} seat={seat1} seatGroup={seat1Group} arrival={arrival} departure={departure}/>
            </div>

            <div className='flex items-center justify-center flex-row gap-4'>
              <p>
                {name2}'s confirmed Boarding Pass:
              </p>
              <BPMConfirmed firstName={name2} lastName={lastName2} date={date} seat={seat2} seatGroup={seat2Group} arrival={arrival} departure={departure}/>
            </div>
          </div>
        )}
        
      </div>
    </div>
  )
}

export default SelfChcekIn