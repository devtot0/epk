'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface BackgroundManagerProps {
  activeBackground: 'default' | 'hyos' | 'cyamus';
  activeOverlay: string | null;
  audioEnabled?: boolean;
}

// Array of available audio files for cyamus
const cyamusAudios = ['/audio1.mp3', '/audio2.mp3'];

export default function BackgroundManager({ activeBackground, activeOverlay, audioEnabled = false }: BackgroundManagerProps) {
  const cyamusVideoRef = useRef<HTMLVideoElement>(null);
  const cyamusAudioRef = useRef<HTMLAudioElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [selectedCyamusAudio, setSelectedCyamusAudio] = useState<string>('');

  // Randomly select cyamus audio when overlay opens
  useEffect(() => {
    if (activeOverlay === 'cyamus') {
      const randomAudioIndex = Math.floor(Math.random() * cyamusAudios.length);
      const selectedAudio = cyamusAudios[randomAudioIndex];
      console.log('🎵 Randomly selected cyamus audio:', selectedAudio);
      setSelectedCyamusAudio(selectedAudio);
    }
  }, [activeOverlay]);

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
      
      
    } else {
      console.log('Audio disabled - muting all audio');
      if (audioRef.current) {
        audioRef.current.muted = true;
        audioRef.current.pause();
      }
    }
  }, [audioEnabled]);

  // Handle cyamus audio playback
  useEffect(() => {
    console.log('🎵 Cyamus audio effect triggered:', { activeBackground, selectedCyamusAudio, audioEnabled });
    
    if (activeBackground === 'cyamus' && audioEnabled && selectedCyamusAudio && cyamusAudioRef.current) {
      cyamusAudioRef.current.src = selectedCyamusAudio;
      cyamusAudioRef.current.muted = false;
      cyamusAudioRef.current.volume = 0.6;
      cyamusAudioRef.current.currentTime = 0;
      cyamusAudioRef.current.play().then(() => {
        console.log('✅ Cyamus audio started playing:', selectedCyamusAudio);
      }).catch((error) => {
        console.error('❌ Error playing cyamus audio:', error);
      });
    } else if (cyamusAudioRef.current) {
      cyamusAudioRef.current.pause();
      console.log('⏸️ Cyamus audio stopped');
    }
  }, [activeBackground, selectedCyamusAudio, audioEnabled]);

  // Handle overlay audio
  useEffect(() => {
    console.log('Active overlay changed to:', activeOverlay);
    console.log('Audio enabled:', audioEnabled);
    console.log('Audio refs:', {
      ocean: !!audioRef.current,
      cyamus: !!cyamusAudioRef.current
    });
    
    // Hyos no longer has audio

    // Cyamus audio is now handled by the new system
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


      {/* Cyamus Audio - Dynamic audio selection */}
      <audio
        ref={cyamusAudioRef}
        loop
        muted
        preload="auto"
        suppressHydrationWarning
      >
        {selectedCyamusAudio && <source src={selectedCyamusAudio} type="audio/mpeg" />}
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
