'use client';

import { useEffect } from 'react';

interface OverlayProps {
  type: string;
  onClose: () => void;
}

export default function Overlay({ type, onClose }: OverlayProps) {
  // Close overlay on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const renderContent = () => {
    switch (type) {
      case 'hyos':
        return (
          <div className="p-8" style={{ background: 'transparent' }}>
            <h2 
              className="text-3xl mb-2 text-white"
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)',
                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))',
                animation: 'glow-pulse 1.2s ease-in-out infinite alternate'
              }}
            >
              About
            </h2>
            <h4 className="text-xl mb-6 text-white" style={{ opacity: 0.9 }}><strong>Trance DJ • music producer • sound designer</strong></h4>
            <div className="text-white space-y-6 max-w-2xl">
              <div className="space-y-4">
                <p>Bearing the genus name of black henbane — a hallucinogenic herb used in European witchcraft — <strong>Hyos</strong> Cyamus is, naturally, a devoted <strong>Trance</strong> music aficionado. In his <strong>DJ</strong> sets, he blends various subgenres of Trance with an admixture of mercurial techno and airy electronica, creating deeply intoxicating, hypnotic potions.</p>
                
                <p>It is of utmost importance to him to actively preserve the cultural legacy of &apos;90s Trance by digitizing rare records and preventing them from falling into oblivion.</p>
                
                <p>His own <strong>productions</strong> are, conversely, barely club-oriented. Hyos Cyamus takes his listeners on a journey through their inner subtle realms, drawing inspiration from haunted folk music, England&apos;s Hidden Reverse scene, experimental electronica, thunderous noise bursts, and, naturally, Trance music.</p>
                
                <p>Will you dare to rub in the flying ointment on your forehead and let your mind run wild?</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl text-white" style={{ opacity: 0.9 }}><strong>Head of Towarzystwo Świadomości Księżycowej</strong></h4>
                <p><a href="https://swiadomoscksiezycowa.pl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200 underline">Towarzystwo Świadomości Księżycowej</a> (Lunar Consciousness Society) is a syndicate and a label devoted to fostering personal mythologies and bridging them to the local and global context. Collectively, we delve into esoterica and philosophy, folklore and ethnography, mythology and religion, with the purpose of encouraging the initiation into the true Selfhood of the individual, for the spiritual and material benefit of all humankind, through various artistic endeavours and non-fiction writings.</p>
                
                <p>You are invited to join us and submit your visions and insights at <a href="https://swiadomoscksiezycowa.pl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200 underline">swiadomoscksiezycowa.pl</a></p>
              </div>
              
              <div className="space-y-4">
                <h3 
                  className="text-xl"
                  style={{
                    textShadow: '0 0 8px rgba(255, 255, 255, 0.4), 0 0 16px rgba(255, 255, 255, 0.2), 0 0 24px rgba(255, 255, 255, 0.1)',
                    filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.3))',
                    animation: 'glow-pulse 1.5s ease-in-out infinite alternate'
                  }}
                >
                  <strong>Mixes & Podcasts</strong>
                </h3>
                <div className="space-y-3">
                  <a href="https://www.mixcloud.com/hyos/" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Mixcloud
                  </a>
                  <a href="https://soundcloud.com/mwtg-podcast/retrospect-195-hyos" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    MWTG Retrospect 195 - Hyos
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 
                  className="text-xl"
                  style={{
                    textShadow: '0 0 8px rgba(255, 255, 255, 0.4), 0 0 16px rgba(255, 255, 255, 0.2), 0 0 24px rgba(255, 255, 255, 0.1)',
                    filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.3))',
                    animation: 'glow-pulse 1.8s ease-in-out infinite alternate'
                  }}
                >
                  <strong>Production & Sound Design</strong>
                </h3>
                <div className="space-y-3">
                  <a href="https://oczajduch.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    oczajduch
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'cyamus':
        return (
          <div className="p-8" style={{ background: 'transparent' }}>
            <div className="w-full flex justify-end mb-6">
              <h2 
                className="text-3xl text-white"
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)',
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))',
                  animation: 'glow-pulse 0.8s ease-in-out infinite alternate'
                }}
              >
                Reach Out
              </h2>
            </div>
            <div className="text-white space-y-6 max-w-2xl ml-auto">
              <div className="space-y-4 text-right">
                <h4 
                  className="text-xl font-semibold"
                  style={{
                    textShadow: '0 0 8px rgba(255, 255, 255, 0.4), 0 0 16px rgba(255, 255, 255, 0.2), 0 0 24px rgba(255, 255, 255, 0.1)',
                    filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.3))',
                    animation: 'glow-pulse 1.0s ease-in-out infinite alternate'
                  }}
                >
                  <strong>Social Links</strong>
                </h4>
                <div className="space-y-3">
                  <a href="https://www.mixcloud.com/hyos/" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Mixcloud
                  </a>
                  <a href="https://soundcloud.com/hyos_cyamus" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    SoundCloud
                  </a>
                  <a href="https://www.instagram.com/hyos_cyamus/" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61578395458936" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Facebook
                  </a>
                  <a href="https://swiadomoscksiezycowa.pl" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Towarzystwo Świadomości Księżycowej
                  </a>
                </div>
              </div>
              
              <div className="space-y-4 text-right">
                <h4 
                  className="text-xl font-semibold"
                  style={{
                    textShadow: '0 0 8px rgba(255, 255, 255, 0.4), 0 0 16px rgba(255, 255, 255, 0.2), 0 0 24px rgba(255, 255, 255, 0.1)',
                    filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.3))',
                    animation: 'glow-pulse 1.3s ease-in-out infinite alternate'
                  }}
                >
                  <strong>Bookings/Contact</strong>
                </h4>
                <div className="space-y-3">
                  <a href="https://linktr.ee/hyos_cyamus" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Linktree
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Content</h2>
            <div className="text-white">
              <p>Default content for {type}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[60] animate-in fade-in duration-300"
      style={{ background: 'transparent' }}
    >
        {/* Close button - position depends on overlay type */}
      <button
        onClick={onClose}
        className={`absolute top-6 text-white hover:text-gray-300 transition-colors z-[70] ${
          type === 'hyos' ? 'right-6' : 'left-6'
        }`}
        aria-label="Close overlay"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      
      {/* Scrollable content */}
      <div className="relative z-10 h-full overflow-y-auto" style={{ background: 'transparent' }}>
        {renderContent()}
      </div>
    </div>
  );
}
