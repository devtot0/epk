'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface BackgroundManagerProps {
  activeBackground: 'default' | 'hyos' | 'cyamus';
}

export default function BackgroundManager({ activeBackground }: BackgroundManagerProps) {
  const hyosVideoRef = useRef<HTMLVideoElement>(null);
  const cyamusVideoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle autoplay after hydration
  useEffect(() => {
    if (hyosVideoRef.current) {
      hyosVideoRef.current.play().catch(console.error);
    }
    if (cyamusVideoRef.current) {
      cyamusVideoRef.current.play().catch(console.error);
    }
    if (audioRef.current) {
      audioRef.current.volume = 0.6; // 60% volume
      audioRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        suppressHydrationWarning
      >
        <source src="/ocean.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* Default Background - img_1.png */}
      <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
        activeBackground === 'default' ? 'opacity-100' : 'opacity-0'
      }`}>
        <Image
          src="/img_1.png"
          alt="Default Background"
          fill
          className="object-cover object-[center_27%]"
          priority
        />
      </div>

      {/* Hyos Background - vid_1.mp4 */}
      <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
        activeBackground === 'hyos' ? 'opacity-100' : 'opacity-0'
      }`}>
        <video
          ref={hyosVideoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          suppressHydrationWarning
        >
          <source src="/vid_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Cyamus Background - vid_2.mp4 */}
      <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
        activeBackground === 'cyamus' ? 'opacity-100' : 'opacity-0'
      }`}>
        <video
          ref={cyamusVideoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          suppressHydrationWarning
        >
          <source src="/vid_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
