"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Seats from '@/components/Seats';

const SelectSeats = () => {
  const [selectedSeats, setSelectedSeats] = useState<{ row: string; column: string }[]>([]);

  // Handle seat selection/deselection
  const handleSeatSelect = (seat: { row: string; column: string }) => {
    if (selectedSeats.some(s => s.row === seat.row && s.column === seat.column)) {
      // Deselect the seat if it's already selected
      const updatedSeats = selectedSeats.filter(s => !(s.row === seat.row && s.column === seat.column));
      setSelectedSeats(updatedSeats);
      // console.log("Deselected seat:", seat);
      // console.log("Current selected seats:", updatedSeats);
      localStorage.setItem("Seats", JSON.stringify(updatedSeats));
    } else if (selectedSeats.length < 2) {
      // Select the seat if less than 2 seats are selected
      const updatedSeats = [...selectedSeats, seat];
      setSelectedSeats(updatedSeats);
      // console.log("Selected seat:", seat);
      // console.log("Current selected seats:", updatedSeats);
      localStorage.setItem("Seats", JSON.stringify(updatedSeats));
    }
  };

  const planeSeats = JSON.parse(localStorage.getItem("Seats") || "[]");
  const seat1Obj = planeSeats[0];
  const seat1 = seat1Obj ? `${seat1Obj.row}${seat1Obj.column}` : null;

  return (
    <div className="flight-background-plane">
      <div className="flex items-center justify-center flex-col">
        {/* TITLE */}
        <p className="flex flex-col h1 text-black mb-4">
          <span className="text-black">Select 2 Seats</span>
          <span className="text-sm flex justify-end text-red-700">
            Click again on the seat to unselect it
          </span>
        </p>

        {/* Buttons */}
        <div className="flex justify-between gap-4 mb-4 px-10">
          {/* Previous Step Button */}
          <Link href="/passenger-details">
            <p className="mt-4 mb-4 px-3 py-1 text-white text-xs font-medium rounded-md bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 transform transition-transform duration-300 hover:scale-110 active:scale-110">
              Previous Step
            </p>
          </Link>

          {/* Next Step Button */}
          <Link href={selectedSeats.length === 2 ? "/boarding-pass" : "#"}>
            <p
              className={`mt-4 mb-4 px-3 py-1 text-white text-xs font-medium rounded-md bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 transform transition-transform duration-300 hover:scale-110 active:scale-110 ${selectedSeats.length === 2 ? '' : 'cursor-not-allowed opacity-50'}`}
            >
              Next Step
            </p>
          </Link>
        </div>

        {/* SEATS */}
        <div className="flex items-center justify-center flex-row scale-50 -translate-y-60 translate-x-2">
          <div className="flex gap-2 items-center justify-center sm:translate-y-40 sm:scale-75 lg:scale-100 flex-row">
            <div className="flex gap-10 items-center justify-center flex-row">
              <Seats column={"left"} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} />
              <Seats column={"right"} onSeatSelect={handleSeatSelect} selectedSeats={selectedSeats} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSeats;