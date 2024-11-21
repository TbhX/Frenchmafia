import React, { useState } from 'react';
import AlbumCover from './AlbumCover';

const AlbumSelection: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<'kato' | 'realzn'>('kato');

  // Fonction pour appliquer un thème
  const applyTheme = (theme: 'kato' | 'realzn') => {
    setSelectedTheme(theme);
    
    // Appliquer une classe de thème global à l'ensemble du site
    document.body.classList.remove('theme-kato', 'theme-realzn');
    document.body.classList.add(`theme-${theme}`);
  };

  return (
    <div className="flex flex-wrap w-full h-screen">
      {/* Affichage de l'album Kato */}
      <AlbumCover side="kato" onClick={() => applyTheme('kato')} />

      {/* Affichage de l'album Realzn */}
      <AlbumCover side="realzn" onClick={() => applyTheme('realzn')} />
    </div>
  );
};

export default AlbumSelection;