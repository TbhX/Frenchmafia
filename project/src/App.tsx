import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa'; // Icônes de soleil et lune
const App: React.FC = () => {
  const [theme, setTheme] = useState<'kato' | 'realzn'>('kato'); // État pour gérer le thème


  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'kato' ? 'realzn' : 'kato'));
  };

  return (
    <div className={`App ${theme === 'kato' ? 'theme-kato' : 'theme-realzn'} theme-transition`}>
      <header className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">Theme Switcher</h1>

        {/* Bouton de changement de thème */}
        <button onClick={toggleTheme} className="text-xl p-2 rounded-full">
          {theme === 'kato' ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
      </header>

      <main className="flex items-center justify-center h-screen">
        <AlbumCover side={theme} onClick={() => console.log('Album clicked')} />
      </main>
    </div>
  );
};

export default App;