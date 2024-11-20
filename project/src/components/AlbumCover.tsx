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
      className={`w-full h-64 relative ${isKato ? 'bg-white' : 'bg-black'}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      {/* Title */}
      <div
        className={`absolute ${isKato ? 'left-8' : 'right-8'} top-8 text-3xl font-bold tracking-[0.2em] z-10 ${
          isKato ? 'text-black' : 'text-white'
        }`}
      >
        {side.toUpperCase()}
      </div>

      {/* Side Specific Design */}
      <div className="absolute inset-0 flex items-center justify-center">
        {isKato ? (
          // Kato Side
          <div className="relative w-full h-full">
            {/* Minimalist Lines */}
            <div className="absolute left-32 top-32 space-y-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-px bg-black"
                  style={{
                    width: `${80 + i * 20}px`,
                    opacity: 0.3 + i * 0.1,
                  }}
                />
              ))}
            </div>

            {/* Circular Pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 border border-black rounded-full"
                    style={{
                      opacity: 0.2 - i * 0.05,
                      transform: `scale(${1 - i * 0.1})`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-black rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          // Realzn Side
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
                      animation: `float ${Math.random() * 5 + 3}s infinite ease-in-out`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Celestial Objects */}
            <div className="absolute right-24 bottom-24 w-64 h-64">
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
                      opacity: 0.7 - i * 0.1,
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