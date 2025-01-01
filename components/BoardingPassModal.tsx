import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image'
  
const BoardingPassModal = () => {
  return (
    <div>
        <AlertDialog>
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
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}

export default BoardingPassModal