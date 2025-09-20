'use client';

interface NavigationProps {
  onMenuClick: (menuItem: string) => void;
  activeOverlay: string | null;
}

// Add CSS animation directly to component
const glowAnimation = `
  @keyframes glow-pulse {
    0% {
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2);
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4));
    }
    100% {
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4);
      filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.8));
    }
  }
`;

// Inject CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = glowAnimation;
  document.head.appendChild(style);
}

export default function Navigation({ onMenuClick, activeOverlay }: NavigationProps) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        {/* Logo/Brand */}
        <button
          onClick={() => onMenuClick('hyos')}
          className={`text-white text-3xl hover:text-gray-300 transition-all duration-300 ${
            activeOverlay ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)',
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))',
            animation: 'glow-pulse 1.2s ease-in-out infinite alternate',
            animationName: 'glow-pulse',
            animationDuration: '1.2s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate'
          }}
        >
          Hyos
        </button>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-8 ${
          activeOverlay ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <button
            onClick={() => onMenuClick('cyamus')}
            className="text-white text-3xl font-medium hover:text-gray-300 transition-all duration-300"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)',
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))',
              animation: 'glow-pulse 0.8s ease-in-out infinite alternate',
              animationName: 'glow-pulse',
              animationDuration: '0.8s',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDirection: 'alternate'
            }}
          >
            Cyamus
          </button>
        </div>
        
        {/* Mobile Menu Button - Cyamus */}
        <button
          onClick={() => onMenuClick('cyamus')}
          className={`md:hidden text-white text-3xl hover:text-gray-300 transition-all duration-300 ${
            activeOverlay ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)',
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))',
            animation: 'glow-pulse 1.5s ease-in-out infinite alternate',
            animationName: 'glow-pulse',
            animationDuration: '1.5s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate'
          }}
        >
          Cyamus
        </button>
      </div>
    </nav>
  );
}
