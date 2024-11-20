import { Artist } from '../types';

export const artists: Record<'kato' | 'realzn', Artist> = {
  kato: {
    name: 'KATO',
    description: 'Minimalist electronic artist pushing the boundaries of abstract sound design. Known for creating immersive sonic landscapes that blend organic and digital elements.',
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
    description: 'Celestial soundscape creator merging dark ambient textures with ethereal melodies. Each track is a journey through cosmic frequencies and otherworldly atmospheres.',
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