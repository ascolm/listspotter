import { Artist } from './spotifyObjects';

export interface GenreDb {
  [key: string]: Artist[]
}
