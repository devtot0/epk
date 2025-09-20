'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface BackgroundManagerProps {
  activeBackground: 'default' | 'hyos' | 'cyamus';
  activeOverlay: string | null;
  audioEnabled?: boolean;
}

export default function BackgroundManager({ activeBackground, activeOverlay, audioEnabled = false }: BackgroundManagerProps) {
  const cyamusVideoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audio2Ref = useRef<HTMLAudioElement>(null);

  // Handle autoplay after hydration
  useEffect(() => {
    if (cyamusVideoRef.current) {
      cyamusVideoRef.current.play().catch(console.error);
    }
    // Don't play audio until user accepts splash
  }, []);

  // Enable audio when splash screen is accepted
  useEffect(() => {
    console.log('Audio enabled changed to:', audioEnabled);
    
    if (audioEnabled) {
      if (audioRef.current) {
        console.log('Enabling ocean.mp3');
        audioRef.current.muted = false;
        audioRef.current.volume = 0.6;
        audioRef.current.play().then(() => {
          console.log('Ocean.mp3 started playing');
        }).catch((error) => {
          console.error('Error playing ocean.mp3:', error);
        });
      }
      
      
      if (audio2Ref.current) {
        console.log('Enabling audio2.mp3');
        audio2Ref.current.muted = false;
      }
    } else {
      console.log('Audio disabled - muting all audio');
      if (audioRef.current) {
        audioRef.current.muted = true;
        audioRef.current.pause();
      }
      if (audio2Ref.current) {
        audio2Ref.current.muted = true;
        audio2Ref.current.pause();
      }
    }
  }, [audioEnabled]);

  // Handle overlay audio
  useEffect(() => {
    console.log('Active overlay changed to:', activeOverlay);
    console.log('Audio enabled:', audioEnabled);
    console.log('Audio refs:', {
      ocean: !!audioRef.current,
      audio2: !!audio2Ref.current
    });
    
    // Hyos no longer has audio

    if (activeOverlay === 'cyamus' && audio2Ref.current && audioEnabled) {
      console.log('Playing audio2 for Cyamus');
      console.log('Audio2 muted:', audio2Ref.current.muted);
      console.log('Audio2 src:', audio2Ref.current.src);
      audio2Ref.current.volume = 0.6; // 60% volume
      audio2Ref.current.play().then(() => {
        console.log('Audio2 started playing successfully');
      }).catch((error) => {
        console.error('Error playing audio2:', error);
      });
    } else if (audio2Ref.current) {
      console.log('Pausing audio2');
      audio2Ref.current.pause();
    }
  }, [activeOverlay, audioEnabled]);

  return (
    <div className="fixed inset-0 w-full h-full z-0">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        muted
        preload="auto"
        suppressHydrationWarning
      >
        <source src="/ocean.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>


      {/* Overlay Audio 2 - Cyamus */}
      <audio
        ref={audio2Ref}
        loop
        muted
        preload="auto"
        suppressHydrationWarning
        onLoadStart={() => console.log('Audio2 load started')}
        onCanPlay={() => console.log('Audio2 can play')}
        onError={(e) => console.error('Audio2 error:', e)}
      >
        <source src="/audio2.mp3" type="audio/mpeg" />
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
