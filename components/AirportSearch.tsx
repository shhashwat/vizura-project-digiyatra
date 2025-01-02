"use client";

import React, { useEffect, useState } from "react";
import { indianAirports } from "@/constants/index";
import { Input } from "./ui/input";

interface AirportSearchProps {
  onSelectAirport: (value: string) => void;
  placeholder: string;
  value: string;
}

const AirportSearch= ({ onSelectAirport, placeholder, value }: AirportSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAirports, setFilteredAirports] = useState(indianAirports);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(e.target.value);
    onSelectAirport(e.target.value);
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredAirports(indianAirports);
    } else {
      const filtered = indianAirports.filter((airport) =>
        `${airport.code} ${airport.cityName} ${airport.fullName}`
          .toLowerCase()
          .includes(value.toLowerCase())
      );
      setFilteredAirports(filtered);
    }

    setIsDropdownOpen(true);
  };

  const handleAirportSelect = (airport: { code: string; cityName: string }) => {
    const displayValue = `${airport.code} - ${airport.cityName}`;
    const displayCode = `${airport.code}`;
    setSearchTerm(displayValue);
    setFilteredAirports([]);
    setIsDropdownOpen(false);
    onSelectAirport(displayCode);
  };

  const handleBlur = () => {
    setTimeout(() => setIsDropdownOpen(false), 150);
  };

  const handleFocus = () => {
    setIsDropdownOpen(true);
  };

  return (
    <div className=" inline-block w-[25%] m-2">
      <div className="hidden" >{searchTerm}</div>
      <Input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isDropdownOpen && filteredAirports.length > 0 && (
        <ul className="absolute w-50 bg-white border rounded shadow-lg mt-1 z-10 max-h-48 overflow-y-auto">
          {filteredAirports.map((airport) => (
            <li
              key={airport.code}
              onClick={() => handleAirportSelect(airport)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {airport.code} - {airport.cityName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportSearch;