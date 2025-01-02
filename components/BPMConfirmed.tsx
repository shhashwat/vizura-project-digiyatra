import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image'
import TicketConfirmed from './TicketConfirmed';
import { Button } from './ui/button';

interface Props {
    firstName: string | null;
    lastName: string | null;
    date: string | null;
    seat: string | null;
    seatGroup: string | null;
    arrival: string | null;
    departure: string | null;
  }

const BPMConfirmed = ({firstName, lastName, date, seat, seatGroup, arrival, departure }: Props) => {
    const [inverse, setInverse] = useState(false);

    const toggleInverse = () => {
        setInverse(!inverse);
    }

    const handlePrint = () => {
        window.print();
      };

  return (
    <div>
        <AlertDialog >
            <AlertDialogTrigger className='px-4 py-2 text-white text-sm font-medium rounded-md bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 hover:opacity-80 transition-opacity duration-300 ease-in-out shadow-md flex items-center flex-row gap-2' >
                <Image
                src={'/assets/icons/ticket.png'}
                width={20}
                height={20}
                alt='boarding-pass'
                />
                BOARDING PASS
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle></AlertDialogTitle>
                    {/* BOARDING PASS */}
                    <TicketConfirmed inverse={inverse} firstName={firstName} lastName={lastName} date={date} seat={seat} seatGroup={seatGroup} arrival={arrival} departure={departure}/>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <Button variant="ghost" onClick={toggleInverse}>Invert Colour</Button>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                onClick={() => handlePrint()}
                >Print</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}

export default BPMConfirmed