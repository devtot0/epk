'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Overlay from '@/components/Overlay';

const BackgroundManager = dynamic(() => import('@/components/BackgroundManager'), {
  ssr: false,
});

export default function Home() {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);
  const [activeBackground, setActiveBackground] = useState<'default' | 'hyos' | 'cyamus'>('default');

  const handleMenuClick = (menuItem: string) => {
    setActiveOverlay(menuItem);
    // Change background based on menu item
    if (menuItem === 'hyos') {
      setActiveBackground('hyos');
    } else if (menuItem === 'cyamus') {
      setActiveBackground('cyamus');
    }
  };

  const handleOverlayClose = () => {
    setActiveOverlay(null);
    setActiveBackground('default');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Manager Component */}
      <BackgroundManager activeBackground={activeBackground} />
      
      {/* Black overlay when overlay is active */}
      {activeOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-[55]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
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
