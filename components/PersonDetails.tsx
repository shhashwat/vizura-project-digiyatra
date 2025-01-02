"use client";

import React, { useState } from 'react'
import { Input } from './ui/input'

interface Props {
  person: number
}

const PersonDetails = ({ person }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleFNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const handleLNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const personDetails = {
    firstName,
    lastName,
    email,
  };

  localStorage.setItem(`person${person}`, JSON.stringify(personDetails));

  const userString1 = localStorage.getItem(`person1`);
  const userObject1 = userString1 ? JSON.parse(userString1) : null;
  const name1 = userObject1 ? `${userObject1.firstName} ${userObject1.lastName} ${userObject1.email}` : null;

  return (
    <div className='m-4' >
      <p>
        Person {person}
      </p>
      <div className='flex justify-between gap-4'>
        <Input className='inline-block w-[41.5%] m-2 p-2 rounded-sm scale-125'
        placeholder='First Name *'
        type='text'
        required
        value={firstName}
        onChange={handleFNChange}
        />

        <Input className='inline-block w-[41.5%] m-2 p-2 rounded-sm scale-125' placeholder='Last Name *' type='text' required
        value={lastName}
        onChange={handleLNChange}
        />
      </div>
        <Input className='translate-x-5 w-[85.5%] m-2 p-2 rounded-sm scale-125' placeholder='Email *' type='email' required
        value={email}
        onChange={handleEmailChange}
        />
    </div>
  )
}

export default PersonDetails