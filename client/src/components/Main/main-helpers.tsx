import { TrackData, TrackItem, ArtistData, Artist } from '../../interfaces/spotifyObjects';
import { GenreDb } from '../../interfaces/genreObjects';
import { getTracks, getArtists } from '../../apiService';
// TODO: Refactor into a standard fetch template

export function fetchTracksWithOffset (code: string, setState: React.Dispatch<React.SetStateAction<TrackItem[]>>, offset = 0, offsetIncrement = 50) {

  async function fetchTracksAsync (code: string, offset: number) {
    const trackData: TrackData = await getTracks(code, offset);
    await setState((prevTracks) => [...prevTracks, ...trackData.items]);

    if (trackData.next) {
      offset += offsetIncrement
      fetchTracksAsync (code, offset);
    }
  };

  fetchTracksAsync(code, offset);
}

export function fetchArtistsWithOffset (code: string, setState: React.Dispatch<React.SetStateAction<Artist[]>>) {
  const artistPromise = new Promise<GenreDb> ((resolve, reject) => {
    let nextUrl;
    let genres: GenreDb;

    async function fetchArtistsAsync (code: string, nextUrl: string | undefined) {
      const artistData: ArtistData = await getArtists(code, nextUrl);
      nextUrl = artistData.artists.next;

      await setState((prevArtists) => {
        let updatedArtists = [...prevArtists, ...artistData.artists.items]
        if (!nextUrl) genres = generateGenres(updatedArtists);
        return updatedArtists;
      });

      if (nextUrl) {
        fetchArtistsAsync (code, nextUrl);
      } else {
        resolve(genres);
      }
    };
    fetchArtistsAsync(code, nextUrl);
  })
  return artistPromise;
}

export function generateGenres (artists: Artist[]) {
  const genreDb: GenreDb = {};
  artists.forEach((artist) => {
    artist.genres.forEach((artistGenre) => {
      if (!genreDb[artistGenre]) {
        genreDb[artistGenre] = {artists: [artist], selected: false};
      } else {
        genreDb[artistGenre].artists.push(artist);
      }
    })
  })

  return genreDb;
};

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

export function filterSelectedGenres (list: GenreDb) {
  return Object.entries(list).filter(([key, value]) => value.selected)
    .reduce<GenreDb>((acc, [key, value]) => {
      acc[key] = value
      return acc;
    }, {});
};