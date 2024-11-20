import { Artist } from '../types';

export const artists: Record<'kato' | 'realzn', Artist> = {
  kato: {
    name: 'KATO',
    description: 'Kato is an artist with an incredible ear, immersed in electronic music since a young age. He has developed his unique style, blending minimalist elements with immersive sound design. Known for creating captivating, abstract soundscapes, his music pushes the boundaries of electronic music, inviting listeners into his sonic world.',
    social: {
      instagram: 'https://instagram.com/kato',
      spotify: 'https://open.spotify.com/artist/kato',
      website: 'https://kato.music'
    },
    tracks: [
      { title: 'Abstract Horizon', duration: '3:45' },
      { title: 'Digital Dawn', duration: '4:12' },
      { title: 'Minimal Motion', duration: '3:58' },
      { title: 'White Space', duration: '4:30' }
    ]
  },
  realzn: {
    name: 'REALZN',
    description: 'Realzn is passionate about the world behind the screen, using technology to shape sound. With a deep understanding of music production, he merges his technical skills with his creative vision, crafting celestial soundscapes. His music invites listeners on a journey through cosmic frequencies and dark, ethereal atmospheres.',
    social: {
      instagram: 'https://instagram.com/realzn',
      spotify: 'https://open.spotify.com/artist/realzn',
      website: 'https://realzn.world'
    },
    tracks: [
      { title: 'Cosmic Drift', duration: '5:20' },
      { title: 'Dark Matter', duration: '4:45' },
      { title: 'Nebula Dreams', duration: '6:10' },
      { title: 'Event Horizon', duration: '5:35' }
    ]
  }
};