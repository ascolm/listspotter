import { GenreDb } from '../../../interfaces/genreObjects'

export function getSortedGenreKeys (genres: GenreDb) {
  const sortedKeys = Object.keys(genres).sort((a, b) => {
    return genres[a].artists.length > genres[b].artists.length ? -1 : 1
  });

  return sortedKeys;
}

export function getMatchingGenres (searchValue: string, genres: GenreDb) {
  const searchRegex = new RegExp(searchValue, 'ig');

  return Object.entries(genres).filter(([key, value]) => key.match(searchRegex))
    .reduce<GenreDb>((acc, [key, value]) => {
      acc[key] = value
      return acc;
    }, {});
}


export function genreResort (genreName: string, db: GenreDb) {
  const splitName = genreName.split(' ');
  // Go over each item in
}