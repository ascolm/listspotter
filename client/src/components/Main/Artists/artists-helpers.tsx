import { GenreDb } from '../../../interfaces/genreObjects';
import { Artist } from '../../../interfaces/spotifyObjects';

export function getArtistsFromGenreList (list: GenreDb) {
  const artists: Artist[] = [];
  Object.values(list).forEach((genre) => {
    genre.artists.forEach((genreArtist) => {
      if (!artists.some((artist) => artist.id === genreArtist.id)) {
        artists.push(genreArtist);
      }
    });
  })
  return artists;
}