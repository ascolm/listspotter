import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TrackItem, Artist } from '../../interfaces/spotifyObjects';
import { getTokens } from '../../apiService';
import { fetchTracksWithOffset, fetchArtistsWithOffset, generateGenres, GenreDb, sortGenres } from './main-helpers';

export interface Props {
}

const Main: React.FC<Props> = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');

  let [tracks, setTracks] = useState<TrackItem[]>([]);
  let [artists, setArtists] = useState<Artist[]>([]);
  let [genres, setGenres] = useState<GenreDb>({});

  useEffect(() => {
    if (!code) return;

    const fetchData = async () => {
      await getTokens(code);
      if (tracks.length === 0) fetchTracksWithOffset(code, setTracks);
      if (artists.length === 0) {
        fetchArtistsWithOffset(code, setArtists).then((genres) => {
          setGenres(genres)
        });
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Main'e hoşgeldiniz aq.</h1>
      {searchParams.get('code') ?
        <div>
          <p>Loaded {tracks.length} songs!</p>
          { Object.keys(genres).length > 0 && sortGenres(genres).map((genreKey) => <p>{genreKey}:{genres[genreKey].length}</p>)}
          {artists.map((artist) => <p>{artist.name}</p>)}
        </div>
      :
      <p>Login unsuccessful (redirect)</p> // TODO: add redirect, cleaner alert
      }
    </div>
  );
}

export default Main;