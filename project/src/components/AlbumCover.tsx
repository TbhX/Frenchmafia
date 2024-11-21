import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import des icônes Soleil et Lune

interface AlbumCoverProps {
  side: 'kato' | 'realzn';
  onClick: () => void;
}

const AlbumCover: React.FC<AlbumCoverProps> = ({ side, onClick }) => {
  const isKato = side === 'kato';

  // Fonction pour afficher l'icône Soleil/Lune
  const renderSunMoon = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      {isKato ? (
        // Icône Soleil pour Kato
        <FaSun className="text-black" size={60} />
      ) : (
        // Icône Lune pour Realzn
        <FaMoon className="text-white" size={60} />
      )}
    </div>
  );

  // Fonction pour afficher les éléments animés sur Kato (plus subtils)
  const renderKatoElements = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-black rounded-full"
          style={{
            width: `${Math.random() * 4 + 1}px`,  // Taille des éléments réduite
            height: `${Math.random() * 4 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.1 + Math.random() * 0.3,  // Opacité plus subtile
            animation: `float ${Math.random() * 3 + 2}s infinite ease-in-out`,
            transform: `scale(${Math.random() * 1 + 0.5})`
          }}
        />
      ))}
    </div>
  );

  // Élément propre au côté Kato (ligne flottante subtile)
  const renderKatoLines = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute border-t-2 border-black opacity-30"
          style={{
            width: `${Math.random() * 50 + 50}%`,  // Longueur de la ligne variable
            top: `${Math.random() * 100}%`,
            animation: `moveLine ${Math.random() * 3 + 2}s infinite ease-in-out`,
            opacity: 0.3 + Math.random() * 0.4, // Opacité subtile
            transform: `rotate(${Math.random() * 45}deg)`  // Rotation aléatoire
          }}
        />
      ))}
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
          // Kato Side with animated black elements and subtle lines
          <div className="relative w-full h-full">
            {/* Light gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-70" />
            
            {/* Render animated black elements */}
            {renderKatoElements()}

            {/* Render subtle floating lines */}
            {renderKatoLines()}

            {/* Render Soleil icon */}
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

            {/* Render Lune icon */}
            {renderSunMoon()}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AlbumCover;