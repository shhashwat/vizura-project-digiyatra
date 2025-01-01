import React from 'react'
import { Input } from './ui/input'

interface Props {
  person: number
}

const PersonDetails = ({ person }: Props) => {
  return (
    <div className='m-4' >
      <p>
        Person {person}
      </p>
      <div className='flex justify-between gap-4'>
        <Input className='inline-block w-[41.5%] m-2 p-2 rounded-sm scale-125' placeholder='First Name *' type='text'/>

        <Input className='inline-block w-[41.5%] m-2 p-2 rounded-sm scale-125' placeholder='Last Name *' type='text'/>
      </div>
        <Input className='translate-x-5 w-[85.5%] m-2 p-2 rounded-sm scale-125' placeholder='Email *' type='email'/>
    </div>
  )
}

export default PersonDetails