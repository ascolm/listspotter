import { Artist } from './spotifyObjects';

export interface Genre{
  artists: Artist[],
  selected: boolean
}

export interface GenreDb {
  [key: string]: Genre
}
