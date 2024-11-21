import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Icônes de soleil et lune
import ThemeSwitch from './components/ThemeSwitch';


const App: React.FC = () => {
  const [theme, setTheme] = useState<'kato' | 'realzn'>('kato'); // État pour gérer le thème

  // Fonction pour basculer entre les thèmes
  const toggleTheme = (newTheme: 'kato' | 'realzn') => {
    setTheme(newTheme);
  };

  return (
    <div className={`App ${theme === 'kato' ? 'theme-kato' : 'theme-realzn'} theme-transition`}>
      <header className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">Theme Switcher</h1>

        {/* Bouton de changement de thème */}
        <button onClick={() => toggleTheme(theme === 'kato' ? 'realzn' : 'kato')} className="text-xl p-2 rounded-full">
          {theme === 'kato' ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
      </header>

      <main className="flex items-center justify-center h-screen">
        <ThemeSwitch currentTheme={theme} onThemeChange={toggleTheme} />
      </main>
    </div>
  );
};

export default App;