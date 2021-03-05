import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TrackItem, Artist } from '../../interfaces/spotifyObjects';
import { GenreDb } from '../../interfaces/genreObjects';
import Genres from './Genres/genres-index';
import { getTokens, createPlaylist } from '../../apiService';
import { artistsMock, tracksMock, genresMock } from '../../devtools/dataMocks';
import './main-style.scss';
import { fetchTracksWithOffset, fetchArtistsWithOffset, generateGenres, getArtistsFromGenreList, filterSelectedGenres } from './main-helpers';
import Artists from './Artists/artists-index';
import Playlist from './Playlist/playlist-index';

export interface Props {
}

const Main: React.FC<Props> = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  let [tracks, setTracks] = useState<TrackItem[]>(tracksMock); // WAS []
  let [artists, setArtists] = useState<Artist[]>(artistsMock); // WAS []
  let [genres, setGenres] = useState<GenreDb>(genresMock); // WAS {}

  // **FETCHING DATA DISABLED FOR TESTING - UNCOMMENT BELOW
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) return;

    const fetchData = async () => {
      // await getTokens(code);
      // if (tracks.length === 0) fetchTracksWithOffset(code, setTracks);
      // if (artists.length === 0) {
      //   fetchArtistsWithOffset(code, setArtists).then((genres) => {
      //     setGenres(genres)
      //   });
      // }
    }

    fetchData();
  }, []);
  //
  // **DISABLED END

  useEffect(() => {
    const selectedGenres = filterSelectedGenres(genres);
    const updatedArtists = getArtistsFromGenreList(selectedGenres);
    setArtists(updatedArtists);
  }, [genres]);

  function selectGenreHandler (genreName: string) {
    // TODO: RESORTING BASED ON MATCH
    const newGenreDb = Object.assign({}, genres);
    newGenreDb[genreName].selected = !newGenreDb[genreName].selected;
    setGenres(newGenreDb);
  }

  async function createPlaylistHandler (playlistName: string, trackURIs: string[]) {
    if (!code) return;
    const playlistID = await createPlaylist(code, playlistName, trackURIs);
    console.log(playlistID);
  }

  return (
    <>
      <h1>Main'e hoşgeldiniz aq.</h1>
    <div className='main-container'>
      <Genres genreList={genres} displayedArtists={artists} selectHandler={selectGenreHandler}/>
      <Artists artistList={artists}/>
      <Playlist tracks={tracks
        .filter((trackItem) => {
          return trackItem.track.artists.some((trackArtist) => artists.findIndex((artist) => artist.id === trackArtist.id) !== -1);
        })} createHandler={createPlaylistHandler}/>


      {/* ** DISABLED FOR TESTING - CHECKS FETCH / UNCOMMENT OR REMOVE LATER
      {searchParams.get('code') ?
        <div>
          <p>Loaded {tracks.length} songs!</p>
          { Object.keys(genres).length > 0 && sortGenres(genres).map((genreKey) => <p>{genreKey}:{genres[genreKey].length}</p>)}
          {artists.map((artist) => <p>{artist.name}</p>)}
        </div>
      :
      <p>Login unsuccessful (redirect)</p> // TODO: add redirect, cleaner alert
      } ** DISABLED END */}
    </div>
    </>
  );
}

export default Main;