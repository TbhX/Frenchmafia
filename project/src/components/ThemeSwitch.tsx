import React from 'react';
import { motion } from 'framer-motion';
import AlbumCover from './AlbumCover';

interface ThemeSwitchProps {
  currentTheme: 'kato' | 'realzn';
  onThemeChange: (theme: 'kato' | 'realzn') => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <motion.div 
      className="relative w-[600px] h-[600px] cursor-pointer perspective-1000"
      whileHover={{ scale: 1.02, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative w-full h-full shadow-2xl rounded-lg overflow-hidden">
        {/* Album Container */}
        <div className="absolute inset-0 flex">
          <AlbumCover side="kato" onClick={() => onThemeChange('kato')} />
          <AlbumCover side="realzn" onClick={() => onThemeChange('realzn')} />

          {/* CD Center Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Outer Ring */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 shadow-lg flex items-center justify-center">
              {/* Inner Ring */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-gray-400 via-gray-500 to-gray-400 flex items-center justify-center shadow-inner">
                {/* Center Hole */}
                <div className="w-6 h-6 rounded-full bg-gradient-to-b from-gray-600 to-gray-800 shadow-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThemeSwitch; 