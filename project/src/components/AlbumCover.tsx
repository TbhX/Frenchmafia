import React from 'react';
import { motion } from 'framer-motion';

interface AlbumCoverProps {
  side: 'kato' | 'realzn';
  onClick: () => void;
}

const AlbumCover: React.FC<AlbumCoverProps> = ({ side, onClick }) => {
  const isKato = side === 'kato';

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
            
            {/* Minimalist Design (No circles or lines) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Simple floating dots */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-black rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: 0.3
                    }}
                  />
                ))}
              </div>
            </div>
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

            {/* Celestial Objects */}
            <div className="absolute right-16 bottom-16 w-48 h-48">
              <div className="relative w-full h-full">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-white rounded-full blur-[1px]"
                    style={{
                      width: `${12 - i * 2}px`,
                      height: `${12 - i * 2}px`,
                      right: `${i * 25}px`,
                      bottom: `${i * 20}px`,
                      opacity: 0.7 - i * 0.1
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AlbumCover;