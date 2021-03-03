import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTracks } from '../../apiService';

export interface Props {
}

const Main: React.FC<Props> = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');

  let [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (!code) return;

    const fetchTracksAsync = async (code: string) => {
      const trackData = await getTracks(code);
      await setTracks(trackData);
    };

    fetchTracksAsync(code);
  }, []);

  return (
    <div>
      <h1>Main'e hoşgeldiniz aq.</h1>
      {searchParams.get('code') ?
        <div>
          {tracks.length === 0 && <p>Login successful - waiting for server</p> }
        </div>
      :
      <p>Login unsuccessful (redirect)</p> // TODO: add redirect, cleaner alert
      }
    </div>
  );
}

export default Main;