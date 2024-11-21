import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa'; // Icônes Soleil et Lune

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

  // Fonction pour simuler la pluie avec des éléments tombant du haut
  const renderRainEffect = () => (
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-black rounded-full"
          style={{
            width: `${Math.random() * 3 + 2}px`,  // Taille des gouttes
            height: `${Math.random() * 3 + 2}px`,
            top: `${Math.random() * -100}%`,  // Positionnement en dehors du haut de l'écran
            left: `${Math.random() * 100}%`,
            opacity: 0.2 + Math.random() * 0.5, // Opacité subtile
            animation: `fall ${Math.random() * 2 + 3}s infinite linear`, // Animation tombante
            animationDelay: `${Math.random() * 3}s`, // Délais d'animation aléatoire
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
          <div className="relative w-full h-full">
            {/* Light gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-70" />
            
            {/* Simuler la pluie */}
            {renderRainEffect()}

            {/* Render Soleil icon */}
            {renderSunMoon()}
          </div>
        ) : (
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