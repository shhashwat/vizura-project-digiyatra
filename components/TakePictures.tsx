"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef, useState } from "react";

const MAX_PICTURES = 20;

const TakePictures = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [pictures, setPictures] = useState<string[]>([]);
  const captureIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsCameraActive(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
    stopCapturing();
  };

  const takePicture = () => {
    if (pictures.length >= MAX_PICTURES) {
      stopCapturing();
      return;
    }

    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const pictureData = canvas.toDataURL("image/png");
        setPictures((prev) => [...prev, pictureData]);
      }
    }
  };

  const startCapturing = () => {
    if (pictures.length < MAX_PICTURES) {
      captureIntervalRef.current = setInterval(takePicture, 300);
    }
  };

  const stopCapturing = () => {
    if (captureIntervalRef.current) {
      clearInterval(captureIntervalRef.current);
      captureIntervalRef.current = null;
    }
  };

  return (
        <div className='flex justify-center flex-col max-w-70 max-h-[600px]' >
          <div className='flex justify-center overflow-hidden border border-black w-72 h-min rounded-md' >
            <div className='-translate-y-28' >
                <div className="camera-container flex flex-col items-center justify-center h-screen bg-gray-100">
                    <div className="controls mb-4 flex flex-col items-center">
                        {!isCameraActive ? (
                        <Button
                        className="flex items-center justify-center p-8 bg-blue-200 hover:bg-blue-300 active:bg-blue-400 transition-colors duration-300 ease-in-out flex-col rounded-2xl"
                        onClick={startCamera}
                        >
                        <div className="flex items-center justify-center p-1 w-full bg-transparent hover:bg-transparent shadow-none flex-col">
                            <Image
                            src={'/assets/icons/cam.png'}
                            width={30}
                            height={30}
                            alt='camera'
                            />
                            <p className='text-black ml-2'>WEBCAM</p>
                        </div>
                        </Button>
                        ) : (
                        <div className="flex flex-col gap-4 items-center">
                            {/*WEBCAM BUTTON*/}
                            <Button
                            className="flex items-center justify-center p-8 bg-blue-200 hover:bg-blue-300 active:bg-blue-400 transition-colors duration-300 ease-in-out flex-col rounded-2xl"
                            onClick={stopCamera}>
                                <div className="flex items-center justify-center p-1 w-full bg-transparent hover:bg-transparent shadow-none flex-col">
                                    <Image
                                    src={'/assets/icons/close-cam.png'}
                                    width={30}
                                    height={30}
                                    alt='camera'
                                    />
                                    <p className='text-black ml-2'>CLOSE WEBCAM</p>
                                </div>
                            </Button>
                            <button
                            onMouseDown={startCapturing}
                            onMouseUp={stopCapturing}
                            onMouseLeave={stopCapturing}
                            disabled={pictures.length >= MAX_PICTURES}
                            className={`px-4 py-2 ${
                                pictures.length >= MAX_PICTURES - 2
                                ? "bg-red-500 scale-75 text-gray-200 cursor-not-allowed"
                                : "bg-blue-500 scale-75 text-white hover:bg-blue-600"
                            } rounded`}
                            >
                            {pictures.length >= MAX_PICTURES - 2
                                ? (
                                    <Image
                                    src={'/assets/icons/check.png'}
                                    width={30}
                                    height={30}
                                    alt='camera'
                                    />
                                )
                                : "Hold to Capture"}
                            </button>
                            {/*PROGRESS BAR*/}
                            <div className="w-full bg-gray-300 rounded h-4 mt-2 relative">
                            <div
                                className="bg-green-500 h-full rounded"
                                style={{
                                width: `${(pictures.length / MAX_PICTURES) * 100}%`,
                                transition: "width 0.2s ease-in-out",
                                }}
                            ></div>
                            <span className="absolute inset-0 flex items-center justify-center text-sm text-white font-semibold">
                            </span>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="video-wrapper mb-4 flex justify-center items-center">
                        <video
                        ref={videoRef}
                        style={{ width: "100%", maxHeight: "150px" }}
                        className={`${isCameraActive && "rounded-lg shadow-md outline-2"}`}
                        ></video>
                        {/*PICTURE CAROUSEL*/}
                        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
                    </div>

                    {pictures.length > 0 && (
                        <div className={`pictures-carousel w-[60%] max-w-xl overflow-x-auto flex gap-4 p-2 border rounded shadow-md ${ !isCameraActive && "-translate-y-40"} bg-white`} >
                        {pictures.map((pic, index) => (
                            <img
                            key={index}
                            src={pic}
                            alt={`Snapshot ${index + 1}`}
                            className="w-24 h-10 object-cover border rounded shadow-md"
                            />
                        ))}
                        </div>
                    )}
                </div>
            </div>
          </div>
        </div>

  );
};

export default TakePictures;