import { GenreDb } from '../../../interfaces/genreObjects'

export function getSortedGenreKeys (genres: GenreDb) {
  const sortedKeys = Object.keys(genres).sort((a, b) => {
    return genres[a].artists.length > genres[b].artists.length ? -1 : 1
  });

  return sortedKeys;
}

export function genreResort (genreName: string, db: GenreDb) {
  const splitName = genreName.split(' ');

  // Go over each item in

}