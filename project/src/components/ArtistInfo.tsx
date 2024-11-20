import React from 'react';
import { Instagram, ExternalLink, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Artist } from '../types';

interface ArtistInfoProps {
  artist: Artist;
  theme: 'kato' | 'realzn';
}

const ArtistInfo: React.FC<ArtistInfoProps> = ({ artist, theme }) => {
  const textColor = theme === 'kato' ? 'text-gray-900' : 'text-white';
  const iconColor = theme === 'kato' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center lg:text-left"
    >
      <h1 className={`text-3xl font-bold mb-6 ${textColor} tracking-wider`}>
        {artist.name}
      </h1>
      <p className={`text-lg mb-8 ${textColor} opacity-90 leading-relaxed`}>
        {artist.description}
      </p>
      
      <div className="flex justify-center lg:justify-start space-x-6">
        <a 
          href={artist.social.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${iconColor} transition-colors`}
        >
          <Instagram size={24} />
        </a>
        <a 
          href={artist.social.spotify} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${iconColor} transition-colors`}
        >
          <Music2 size={24} />
        </a>
        <a 
          href={artist.social.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${iconColor} transition-colors`}
        >
          <ExternalLink size={24} />
        </a>
      </div>
    </motion.div>
  );
};

export default ArtistInfo;