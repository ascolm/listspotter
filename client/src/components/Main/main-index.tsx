import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTracks } from '../../apiService';

export interface Props {
}

//TODO create Track interface, move it to a separate file together with TrackItem

interface TrackItem {
  added_at: string,
  track: any
}

interface TrackData {
  total: number,
  items: TrackItem[],
  next: string | null
}

const Main: React.FC<Props> = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');
  const secret = searchParams.get('secret');

  let [tracks, setTracks] = useState<TrackItem[]>([]);

  useEffect(() => {
    if (!code) return;

    let total: number | undefined;
    let offset = 0;
    const offsetIncrement = 50 // this is the max number of objects Spotify returns in one "Get User's Saved Tracks" query

    //TODO: check if secret is the same as the one sent
    async function fetchTracksAsync (code: string, offset: number) {
      const trackData: TrackData = await getTracks(code, offset);
      console.log(trackData)
      await setTracks((prevTracks) => [...prevTracks, ...trackData.items]);

      console.log(tracks);

      if (!total) total = trackData.total;

      if (trackData.next) {  // TODO: limiting to 200 for testing, swap it with "total" later
        offset += offsetIncrement
        fetchTracksAsync (code, offset);
      }
    };

    if (tracks.length === 0) fetchTracksAsync(code, offset);
  }, []);

  return (
    <div>
      <h1>Main'e hoşgeldiniz aq.</h1>
      {searchParams.get('code') ?
        <div>
          <p>Loaded {tracks.length} songs!</p>
        </div>
      :
      <p>Login unsuccessful (redirect)</p> // TODO: add redirect, cleaner alert
      }
    </div>
  );
}

export default Main;