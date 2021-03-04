import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTracks } from '../../apiService';
import { TrackItem, TrackData } from '../../interfaces/spotifyObjects';
import { fetchTracksWithOffset } from './main-helpers';

export interface Props {
}

const Main: React.FC<Props> = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');

  let [tracks, setTracks] = useState<TrackItem[]>([]);

  useEffect(() => {
    if (!code) return;
    if (tracks.length === 0) fetchTracksWithOffset(code, setTracks);
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