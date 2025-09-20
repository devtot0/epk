'use client';

import { useState } from 'react';
import BackgroundImage from '@/components/BackgroundImage';
import Navigation from '@/components/Navigation';
import Overlay from '@/components/Overlay';

export default function Home() {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Component */}
      <BackgroundImage />
      
      {/* Navigation Component */}
      <Navigation onMenuClick={setActiveOverlay} />
      
      {/* Overlay Components */}
      {activeOverlay && (
        <Overlay 
          type={activeOverlay} 
          onClose={() => setActiveOverlay(null)}
        />
      )}
    </div>
  );
}
