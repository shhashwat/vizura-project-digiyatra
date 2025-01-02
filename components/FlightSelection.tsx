"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FlightsAvailable from "@/components/FlightsAvailable";

import AirportSearch from "@/components/AirportSearch";

const FlightSelection = () => {
  const [selectedArrival, setSelectedArrival] = useState("");
  const [selectedDeparture, setSelectedDeparture] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showFlights, setShowFlights] = useState(false);

  const handleArrivalSelect = (value: string) => {
    setSelectedArrival(value);
  };

  const handleSwap = () => {
    setSelectedArrival((prevArrival) => {
      const temp = selectedDeparture;
      setSelectedDeparture(prevArrival);
      return temp;
    });
  };

  const handleDepartureSelect = (value: string) => {
    setSelectedDeparture(value);
  };

  const handleSearchClick = () => {
    if (selectedArrival && selectedDeparture && selectedDate) {
      setShowFlights(true);
    } else {
      setShowFlights(false);
    }
  };

  localStorage.setItem("Arrival", selectedArrival);
  localStorage.setItem("Departure", selectedDeparture);
  localStorage.setItem("Date", selectedDate);

  const newArrival = () =>{
    localStorage.setItem("Arrival", selectedArrival);
  }
  const newDeparture = () =>{
    localStorage.setItem("Arrival", selectedDeparture);
  }
  const newDate = () =>{
    localStorage.setItem("Arrival", selectedDate);
  }

  return (
    <div>
        <div className="bg-white rounded-md lg:w-[120%] lg:-translate-x-24 sm:w-[95%] h-[105%] shadow-md p-4">
          <AirportSearch
            onSelectAirport={handleArrivalSelect}
            placeholder="From"
            value={selectedArrival}
          />
          <Button className="relative overflow-hidden rounded-full bg-transparent hover:bg-transparent hover:bg-gray-100 active:bg-gray-150 transition-color duration-1000 ease-linear shadow-none"
            onClick={handleSwap}>
            <Image
              src={"/assets/icons/swap.png"}
              width={24}
              height={24}
              alt="Swap"
            />
          </Button>
          <AirportSearch
            onSelectAirport={handleDepartureSelect}
            placeholder="To"
            value={selectedDeparture}
          />
          <Input
            type={"date"}
            className="inline-block w-[30%] m-2"
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <Button
            className="relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 hover:opacity-90 active:opacity-80 transition-all duration-300 ease-in-out transform hover:scale-110 shadow-md hover:shadow-lg translate-y-2"
            onClick={handleSearchClick}
          >
            <Image
              src={"/assets/icons/search.png"}
              width={24}
              height={24}
              alt="Search"
            />
          </Button>
          {!selectedArrival ||
          !selectedDeparture ||
          !selectedDate ? (
            <h1 className="flex justify-center items-center text-black-500 mt-4">
              Please select your flight departure, destination, and date
            </h1>
          ) : null}
        </div>
        {showFlights && <FlightsAvailable arrival={selectedArrival} departure={selectedDeparture} />}
    </div>
  );
};

export default FlightSelection;