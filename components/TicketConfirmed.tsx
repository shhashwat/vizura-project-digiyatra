import Image from "next/image";
import React from "react";

interface TicketProps {
  inverse?: boolean;
  firstName: string | null;
  lastName: string | null;
  date: string | null;
  seat: string | null;
  seatGroup: string | null;
  arrival: string | null;
  departure: string | null;
}

const Ticket = ({ inverse = true, firstName, lastName, date, seat, seatGroup, arrival, departure }: TicketProps) => {

  const ticketClass = inverse
    ? "bg-gray-100 text-gray-800"
    : "bg-gray-800 text-white";
  const headerClass = inverse ? "bg-blue-500" : "bg-gray-700";
  const airportCodeColor = inverse ? "text-gray-600" : "text-white";
  const airportArrowColor = inverse ? "text-gray-300" : "text-gray-600";

  return (
    <div className={`inline-block w-80 m-5 rounded-lg shadow-md ${ticketClass}`}>
      <header className={`relative h-12 px-4 py-2 rounded-t-lg ${headerClass}`}>
        <div className="text-left leading-[35px]">BOARDING PASS(Web ChcekIn)</div>
        <div className="absolute top-2 right-4 text-center font-medium text-xs">
          <div>Gate</div>
          <div>T1</div>
        </div>
      </header>
      <section className="px-4 py-2 border-b-2 border-dashed border-gray-600 text-center relative">
        <div className="relative inline-block mx-5">
        <div className="text-blue-500 text-xs font-medium">
          {firstName}
        </div>
          <div className={`text-3xl font-medium my-1 ${airportCodeColor}`}>
          {arrival}
          </div>
          <div className="text-xs font-semibold text-gray-400">Departing</div>
          <div className="text-xs text-gray-400">20:08</div>
          {!inverse && (
            <i
              className={`absolute top-1/2 right-[-150%] transform -translate-y-1/2 text-5xl ${airportArrowColor} fas fa-plane`}
            ></i>
          )}
        </div>
        <div className="relative inline-block mx-5">
        <div className="text-blue-500 text-xs font-medium">
          {lastName}
        </div>
          <div className={`text-3xl font-medium my-1 ${airportCodeColor}`}>
          {departure}
          </div>
          <div className="text-xs font-semibold text-gray-400">Arriving</div>
          <div className="text-xs text-gray-400">22:23</div>
        </div>
      </section>
      <section className="p-4 text-center">
        <div className="inline-block mx-8">
          <div className="text-blue-500 uppercase font-medium text-sm mb-2">
            Group
          </div>
          <div className="text-gray-400 text-xs font-medium">
            {seatGroup}
          </div>
        </div>
        <div className="inline-block mx-8">
          <div className="text-blue-500 uppercase font-medium text-sm mb-2">
            Seat
          </div>
          <div className="text-gray-400 text-xs font-medium">{seat}</div>
        </div>
        <div className="inline-block mx-8">
          <div className="text-blue-500 uppercase font-medium text-sm mb-2">
            Date
          </div>
          <div className="text-gray-400 text-xs font-medium">
            {date}
          </div>
        </div>
        <div className="w-56 h-56 mx-auto mt-5 rounded-lg overflow-hidden">
          <img
            src="http://www.classtools.net/QR/pics/qr.png"
            alt="QR Code"
            className="w-full h-full object-cover"
          />
        </div>
        <Image
          src="/assets/approved.png"
          alt="Barcode"
          width={200}
          height={100}
          className="opacity-80 absolute bottom-72 right-20 transform -translate-x-1/2"
        />
      </section>
    </div>
  );
};

export default Ticket;