import React from 'react';
import { motion } from 'framer-motion';

interface AlbumCoverProps {
  side: 'kato' | 'realzn';
  onClick: () => void;
}

const AlbumCover: React.FC<AlbumCoverProps> = ({ side, onClick }) => {
  const isKato = side === 'kato';

  // Fonction pour générer l'illustration Soleil/Lune
  const renderSunMoon = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      {isKato ? (
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-black rounded-full opacity-60" />
        </div>
      ) : (
        <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full opacity-60" />
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      className={`w-full md:w-1/2 h-full relative ${isKato ? 'bg-white' : 'bg-black'}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {/* Title */}
      <div
        className={`absolute ${isKato ? 'left-8' : 'right-8'} top-8
          text-xl md:text-3xl font-bold tracking-[0.2em] z-10
          ${isKato ? 'text-black' : 'text-white'}`}
      >
        {side.toUpperCase()}
      </div>

      {/* Side Specific Design */}
      <div className="absolute inset-0 flex items-center justify-center">
        {isKato ? (
          // Kato Side with minimalist light theme
          <div className="relative w-full h-full">
            {/* Light gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-70" />
            
            {/* Replace circular pattern with Sun illustration */}
            {renderSunMoon()}
          </div>
        ) : (
          // Realzn Side with dark theme
          <div className="relative w-full h-full overflow-hidden">
            {/* Smoke Effect */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-black opacity-90" />
              <div className="absolute inset-0 animate-smoke">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-white blur-[2px]"
                    style={{
                      width: `${Math.random() * 4 + 1}px`,
                      height: `${Math.random() * 4 + 1}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.5,
                      transform: `scale(${Math.random() * 2 + 1})`,
                      animation: `float ${Math.random() * 5 + 3}s infinite ease-in-out`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Replace celestial objects with Moon illustration */}
            {renderSunMoon()}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AlbumCover;