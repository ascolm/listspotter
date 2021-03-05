import { GenreDb } from '../../../interfaces/genreObjects';
import { Artist } from '../../../interfaces/spotifyObjects';

export function getSortedGenreKeys (genres: GenreDb, selectedArtists: Artist[]) {
  const sortedKeys = Object.keys(genres).sort((a, b) => {
    // uncomment if you want to have selected ones at the top
    if (genres[a].selected && !genres[b].selected) return -1;
    if (!genres[a].selected && genres[b].selected) return 1;

    // return genres[a].artists.length > genres[b].artists.length ? -1 : 1

    function countBasedOnSelectStatus (genre: string) {
      return genres[genre].selected ? genres[genre].artists.length : countUnselected(genres, genre, selectedArtists)
    };


    return countBasedOnSelectStatus(a) > countBasedOnSelectStatus(b)  ? -1 : 1
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

export function countUnselected (genreList: GenreDb, genreName: string, selectedArtists: Artist[]) {
  const genreArtists = genreList[genreName].artists;
  return genreArtists.filter((genreArtist) => !selectedArtists.some((selectedArtist) => selectedArtist.id === genreArtist.id)).length;
}