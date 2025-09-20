'use client';

interface NavigationProps {
  onMenuClick: (menuItem: string) => void;
  activeOverlay: string | null;
}

export default function Navigation({ onMenuClick, activeOverlay }: NavigationProps) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        {/* Logo/Brand */}
        <button
          onClick={() => onMenuClick('hyos')}
          className={`text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
            activeOverlay ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          Hyos
        </button>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-8 ${
          activeOverlay ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <button
            onClick={() => onMenuClick('cyamus')}
            className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-200"
          >
            Cyamus
          </button>
        </div>
        
        {/* Mobile Menu Button - Cyamus */}
        <button
          onClick={() => onMenuClick('cyamus')}
          className={`md:hidden text-white text-lg hover:text-gray-300 transition-colors duration-200 ${
            activeOverlay ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          Cyamus
        </button>
      </div>
    </nav>
  );
}
