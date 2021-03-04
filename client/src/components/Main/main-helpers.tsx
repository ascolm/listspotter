import { TrackData, TrackItem } from '../../interfaces/spotifyObjects';
import { getTracks } from '../../apiService';

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
