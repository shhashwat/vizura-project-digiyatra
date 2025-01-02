"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import SelfCheckinModal from "./SelfCheckinModal";

const VerifyPassengers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);

    setTimeout(() => {
      setIsModalOpen(false);
    }, 8000);
  };

  return (
    <div>
      <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <AlertDialogTrigger
          onClick={handleOpen}
          className="px-3 py-1.5 text-white text-sm font-medium rounded-md bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 hover:opacity-80 transition-opacity duration-300 ease-in-out shadow-md flex items-center flex-row gap-2"
        >
          Verify Passengers
        </AlertDialogTrigger>
        {isModalOpen && (
          <AlertDialogContent>
            <AlertDialogHeader className="flex flex-col h-96">
              <SelfCheckinModal />
              <AlertDialogTitle className="hidden" />
            </AlertDialogHeader>
          </AlertDialogContent>
        )}
      </AlertDialog>
    </div>
  );
};

export default VerifyPassengers;