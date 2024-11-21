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
      className={`w-full lg:w-[50%] aspect-square relative ${
        isKato ? 'bg-white' : 'bg-black'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      {/* Title */}
      <div
        className={`absolute ${isKato ? 'top-4 left-4' : 'top-4 right-4'} text-2xl tracking-wide font-bold ${
          isKato ? 'text-black' : 'text-white'
        }`}
      >
        {side.toUpperCase()}
      </div>

      {isKato ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Circle */}
            <div className="absolute inset-0 border-2 border-black rounded-full" />
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Realzn Design */}
          <div className="absolute inset-0 bg-gradient-radial from-gray-800 via-black to-black opacity-80"></div>
        </div>
      )}
    </motion.div>
  );
};

export default AlbumSide;