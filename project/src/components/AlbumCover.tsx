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
      className={`w-full lg:w-[50%] aspect-square relative ${isKato ? 'bg-white' : 'bg-black'}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      {/* Title */}
      <div
        className={`absolute ${isKato ? 'left-4' : 'right-4'} top-4 text-3xl font-bold tracking-wide z-10 ${isKato ? 'text-black' : 'text-white'}`}
      >
        {side.toUpperCase()}
      </div>

      {/* Side Specific Design */}
      <div className="absolute inset-0 flex items-center justify-center">
        {isKato ? (
          <div className="relative w-full h-full">
            {/* Kato Design */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Circle Pattern */}
              <div className="relative w-64 h-64">
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
          </div>
        ) : (
          <div className="relative w-full h-full">
            {/* Realzn Design */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black opacity-90"></div>
            <div className="absolute text-white text-lg font-semibold tracking-wide">
              Realzn Theme Active
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AlbumCover; 