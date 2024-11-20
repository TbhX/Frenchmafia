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
      className={`w-1/2 h-full relative ${isKato ? 'bg-white' : 'bg-black'}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {/* Title */}
      <div className={`absolute ${isKato ? 'top-6 left-6' : 'top-6 right-6'} text-3xl tracking-wider font-bold ${isKato ? 'text-black' : 'text-white'}`}>
        {side.toUpperCase()}
      </div>

      {isKato ? (
        // Kato Side Design
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 relative">
            {/* Main Circle */}
            <div className="absolute inset-0 border-2 border-black rounded-full" />

            {/* Dotted Pattern */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-black rounded-full"
                  style={{
                    left: `${Math.cos(i * (Math.PI / 6)) * 120 + 120}px`,
                    top: `${Math.sin(i * (Math.PI / 6)) * 120 + 120}px`,
                  }}
                />
              ))}
            </div>

            {/* Vertical Lines */}
            <div className="absolute -left-32 h-full">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-full w-px bg-black opacity-30"
                  style={{ left: `${i * 12}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Realzn Side Design
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="w-64 h-64 relative">
            {/* Smoke Effect */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-radial from-gray-800 via-transparent to-black opacity-80" />
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
            <div className="absolute right-0 bottom-0 w-32 h-32">
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