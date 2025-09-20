'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SplashScreenProps {
  onAccept: () => void;
}

export default function SplashScreen({ onAccept }: SplashScreenProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      // Small delay for visual feedback
      setTimeout(() => {
        onAccept();
      }, 200);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative max-w-md w-full mx-4">
        {/* Splash Image */}
        <div className="relative w-full aspect-square">
          <Image
            src="/splash.jpeg"
            alt="Click to enable audio and video"
            fill
            className={`object-cover rounded-lg transition-all duration-200 ${
              isClicked ? 'scale-95 opacity-80' : 'hover:scale-105'
            }`}
            priority
          />
        </div>
        
        {/* Click instruction */}
        <div className="mt-6 text-center">
          <p className="text-white text-lg font-medium mb-2">
            Click to enable audio and video
          </p>
          <p className="text-gray-300 text-sm">
            This will allow multimedia content to play automatically
          </p>
        </div>
        
        {/* Loading indicator when clicked */}
        {isClicked && (
          <div className="mt-4 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}
      </div>
    </div>
  );
}
