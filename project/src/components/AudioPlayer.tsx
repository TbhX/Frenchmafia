import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Track } from '../types';

interface AudioPlayerProps {
  tracks: Track[];
  theme: 'kato' | 'realzn';
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ tracks, theme }) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const textColor = theme === 'kato' ? 'text-gray-900' : 'text-white';
  const buttonColor = theme === 'kato' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`rounded-lg p-6 ${theme === 'kato' ? 'bg-gray-50' : 'bg-gray-900'}`}
    >
      <div className="space-y-4">
        {/* Current Track Info */}
        <div className={`${textColor}`}>
          <h3 className="text-lg font-semibold">{tracks[currentTrack].title}</h3>
          <p className="text-sm opacity-75">{tracks[currentTrack].duration}</p>
        </div>

        {/* Progress Bar */}
        <div className="relative h-1 bg-gray-300 rounded-full">
          <div 
            className={`absolute h-full rounded-full ${
              theme === 'kato' ? 'bg-gray-700' : 'bg-white'
            }`} 
            style={{ width: '45%' }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <button className={`${buttonColor} transition-colors`}>
            <SkipBack size={20} />
          </button>
          <button 
            className={`${buttonColor} transition-colors`}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button className={`${buttonColor} transition-colors`}>
            <SkipForward size={20} />
          </button>
          <button className={`${buttonColor} transition-colors`}>
            <Volume2 size={20} />
          </button>
        </div>

        {/* Playlist */}
        <div className="mt-6 space-y-2">
          {tracks.map((track, index) => (
            <div 
              key={track.title}
              className={`flex justify-between items-center p-2 rounded cursor-pointer ${
                currentTrack === index 
                  ? theme === 'kato' ? 'bg-gray-200' : 'bg-gray-800'
                  : 'hover:bg-opacity-10 hover:bg-gray-500'
              }`}
              onClick={() => setCurrentTrack(index)}
            >
              <span className={`text-sm ${textColor}`}>{track.title}</span>
              <span className={`text-xs ${textColor} opacity-75`}>{track.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AudioPlayer;