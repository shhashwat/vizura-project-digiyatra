"use client";

import React, { useRef, useEffect } from "react";

const SelfCheckinModal: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }

        timer = setTimeout(() => {
          if (stream) {
            stream.getTracks().forEach((track) => track.stop()); // Stop accessing the camera
          }

          if (videoRef.current) {
            videoRef.current.srcObject = null; // Clear video feed
          }
        }, 7000);
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();

    return () => {
      // Cleanup: Stop the camera and clear the timer
      if (timer) clearTimeout(timer);

      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-4 text-2xl rounded-lg flex items-center flex-col gap-4">
        <strong>Self Check-In</strong>
        <video
          ref={videoRef}
          className="rounded-lg w-full h-auto"
          autoPlay
          muted
        />
      </div>
    </div>
  );
};

export default SelfCheckinModal;