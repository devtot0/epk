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
          <div className="p-8">
            <h2 className="text-3xl mb-6 text-white">Hyos</h2>
            <div className="text-white space-y-6 max-w-2xl">
              <div className="space-y-4">
                <h3 className="text-xl">Portfolio</h3>
                <p>Add your portfolio content here. This section will contain information about Hyos.</p>
                <p>You can include personal background, achievements, and any other relevant information.</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl">Projects</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Project 1
                  </a>
                  <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Project 2
                  </a>
                  <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Project 3
                  </a>
                  <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Project 4
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'cyamus':
        return (
          <div className="p-8">
            <div className="w-full flex justify-end mb-6">
              <h2 className="text-3xl text-white">Cyamus</h2>
            </div>
            <div className="text-white space-y-6 max-w-2xl ml-auto">
              <div className="space-y-4 text-right">
                <h3 className="text-xl font-semibold">Social Links</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Instagram
                  </a>
                  <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Twitter
                  </a>
                  <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    LinkedIn
                  </a>
                  <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Website
                  </a>
                </div>
              </div>
              
              <div className="space-y-4 text-right">
                <h3 className="text-xl font-semibold">Contact</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Email
                  </a>
                  <a href="#" className="block text-white hover:text-gray-300 transition-colors duration-200 underline">
                    Phone
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
      className="fixed inset-0 z-[60]"
      style={{ backdropFilter: 'blur(12px)' }}
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
      <div className="relative z-10 h-full overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}
