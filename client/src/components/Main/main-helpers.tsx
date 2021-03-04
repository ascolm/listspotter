import { TrackData, TrackItem, ArtistData, Artist } from '../../interfaces/spotifyObjects';
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

export interface GenreDb {
  [key: string]: Artist[]
}

export function generateGenres (artists: Artist[]) {
  const genreDb: GenreDb = {};
  artists.forEach((artist) => {
    artist.genres.forEach((artistGenre) => {
      if (!genreDb[artistGenre]) {
        genreDb[artistGenre] = [artist];
      } else {
        genreDb[artistGenre].push(artist);
      }
    })
  })

  return genreDb;
};