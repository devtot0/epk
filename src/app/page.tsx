'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Overlay from '@/components/Overlay';
import SplashScreen from '@/components/SplashScreen';

const BackgroundManager = dynamic(() => import('@/components/BackgroundManager'), {
  ssr: false,
});

export default function Home() {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);
  const [activeBackground, setActiveBackground] = useState<'default' | 'hyos' | 'cyamus'>('default');
  const [audioEnabled, setAudioEnabled] = useState(false);

  const handleMenuClick = (menuItem: string) => {
    setActiveOverlay(menuItem);
    // Change background based on menu item
    if (menuItem === 'hyos') {
      setActiveBackground('default'); // Hyos uses default background with blur overlay
    } else if (menuItem === 'cyamus') {
      setActiveBackground('cyamus');
    }
  };

  const handleOverlayClose = () => {
    setActiveOverlay(null);
    setActiveBackground('default');
  };

  const handleSplashAccept = () => {
    setAudioEnabled(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Splash Screen */}
      {!audioEnabled && (
        <SplashScreen onAccept={handleSplashAccept} />
      )}
      
      {/* Background Manager Component */}
      <BackgroundManager activeBackground={activeBackground} activeOverlay={activeOverlay} audioEnabled={audioEnabled} />
      
      {/* Transparent blur overlay for hyos */}
      {activeOverlay === 'hyos' && (
        <div 
          className="fixed inset-0 z-[55] animate-in fade-in duration-300"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        >
        </div>
      )}
      
      {/* Black overlay for cyamus */}
      {activeOverlay === 'cyamus' && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-[55] animate-in fade-in duration-300" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        >
          {/* Debug: This should be visible */}
        </div>
      )}
      
      {/* Navigation Component */}
      <Navigation onMenuClick={handleMenuClick} activeOverlay={activeOverlay} />
      
      {/* Overlay Components */}
      {activeOverlay && (
        <Overlay 
          type={activeOverlay} 
          onClose={handleOverlayClose}
        />
      )}
    </div>
  );
}
