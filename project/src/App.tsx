// App.tsx
import React, { useState } from 'react';
import ThemeSwitch from './components/ThemeSwitch';
import ArtistInfo from './components/ArtistInfo';
import AudioPlayer from './components/AudioPlayer';
import { artists } from './data/artists';

function App() {
  const [theme, setTheme] = useState<'kato' | 'realzn'>('kato');

  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      theme === 'kato' ? 'bg-white' : 'bg-black'
    }`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[calc(100vh-4rem)]">
          {/* Album Cover */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <ThemeSwitch currentTheme={theme} onThemeChange={setTheme} />
          </div>

          {/* Artist Info & Player Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <ArtistInfo artist={artists[theme]} theme={theme} />
            <AudioPlayer tracks={artists[theme].tracks} theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;