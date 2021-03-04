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
    let nextUrl;
    async function fetchArtistsAsync (code: string, nextUrl: string | undefined) {
      const artistData: ArtistData = await getArtists(code, nextUrl);
      nextUrl = artistData.artists.next;

      await setState((prevArtists) => [...prevArtists, ...artistData.artists.items]);

      if (nextUrl) {
        fetchArtistsAsync (code, nextUrl);
      }
    };

    fetchArtistsAsync(code, nextUrl);
}
