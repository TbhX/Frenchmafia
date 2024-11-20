export interface Artist {
  name: string;
  description: string;
  social: {
    instagram: string;
    spotify: string;
    website: string;
  };
  tracks: Track[];
}

export interface Track {
  title: string;
  duration: string;
  url?: string;
}