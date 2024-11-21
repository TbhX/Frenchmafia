import React from 'react';
import { motion } from 'framer-motion';

interface AlbumSideProps {
  side: 'kato' | 'realzn';
  onClick: () => void;
}

const AlbumSide: React.FC<AlbumSideProps> = ({ side, onClick }) => {
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
        className={`absolute top-6 left-1/2 transform -translate-x-1/2 text-xl md:text-3xl tracking-wider font-bold 
        ${isKato ? 'text-black' : 'text-white'}`}
      >
        {side.toUpperCase()}
      </div>

      {isKato ? (
        // Kato Side Design with a light theme similar to realzn
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="w-48 md:w-64 h-48 md:h-64 relative">
            {/* Light gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 opacity-40" />
            {/* Custom elements or additional effects for Kato */}
          </div>
        </div>
      ) : (
        // Realzn Side Design with dark theme
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="w-48 md:w-64 h-48 md:h-64 relative">
            {/* Smoke Effect for realzn */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 animate-smoke">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: `${Math.random() * 3 + 1}px`,
                      height: `${Math.random() * 3 + 1}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.4,
                      filter: 'blur(1px)',
                      animation: `float ${Math.random() * 4 + 3}s infinite ease-in-out`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Celestial Objects */}
            <div className="absolute right-0 bottom-0 w-24 md:w-32 h-24 md:h-32">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white rounded-full blur-[1px]"
                  style={{
                    width: `${8 - i * 2}px`,
                    height: `${8 - i * 2}px`,
                    right: `${i * 20}px`,
                    bottom: `${i * 15}px`,
                    opacity: 0.6 - i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default AlbumSide;