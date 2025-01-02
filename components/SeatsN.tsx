"use client";

import React from 'react';
import Image from 'next/image';
import { planeSeatsLeft, planeSeatsRight } from '@/constants/index';

const SeatsN = ({
  column,
  onSeatSelect,
  selectedSeats,
}: {
  column: string;
  onSeatSelect: (seat: { row: string; column: string }) => void;
  selectedSeats: { row: string; column: string }[];
}) => {
  return (
    <div className="flex items-center justify-center flex-row">
      {column === "left" ? (
        <div className="flex flex-col items-center space-y-4 p-4">
          <div className="grid grid-cols-3 gap-4">
            {planeSeatsLeft.map((seat) => (
              <button
                key={`${seat.row}${seat.column}`}
                className={`w-12 h-12 border border-gray-400 rounded text-sm font-medium hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 flex flex-col items-center justify-center p-1 ${
                  selectedSeats.some(
                    (s) => s.row === seat.row && s.column === seat.column
                  )
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => onSeatSelect(seat)}
              >
                <Image src="/assets/icons/seat.png" width={30} height={30} alt="seat" />
                {seat.row}
                {seat.column}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4 p-4">
          <div className="grid grid-cols-3 gap-4">
            {planeSeatsRight.map((seat) => (
              <button
                key={`${seat.row}${seat.column}`}
                className={`w-12 h-12 border border-gray-400 rounded text-sm font-medium hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 flex flex-col items-center justify-center p-1 ${
                  selectedSeats.some(
                    (s) => s.row === seat.row && s.column === seat.column
                  )
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => onSeatSelect(seat)}
              >
                <Image src="/assets/icons/seat.png" width={30} height={30} alt="seat" />
                {seat.row}
                {seat.column}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatsN;