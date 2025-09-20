'use client';

interface NavigationProps {
  onMenuClick: (menuItem: string) => void;
}

export default function Navigation({ onMenuClick }: NavigationProps) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        {/* Logo/Brand */}
        <button
          onClick={() => onMenuClick('hyos')}
          className="text-white text-xl hover:text-gray-300 transition-colors duration-200"
        >
          Hyos
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
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
          className="md:hidden text-white text-lg hover:text-gray-300 transition-colors duration-200"
        >
          Cyamus
        </button>
      </div>
    </nav>
  );
}
