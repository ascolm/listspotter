import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TrackItem, Artist } from 'interfaces/spotifyObjects';
import { GenreDb } from 'interfaces/genreObjects';
import Genres from './Genres/genres-index';
import { getTokens, createPlaylist, getTracks } from 'apiService';
import { artistsMock, tracksMock, genresMock } from 'devtools/dataMocks';
import './main-style.scss';
import {
  // fetchTracksWithOffset,
  fetchArtistsWithOffset,
  generateGenres,
  getSelectedTracks,
  markGenreArtists,
  filterSelectedGenres,
  artistToggleUpdate
 } from './main-helpers';
import Artists from './Artists/artists-index';
import Playlist from './Playlist/playlist-index';

export interface Props {
}

const Main: React.FC<Props> = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  let [tracks, setTracks] = useState<TrackItem[]>([]); // WAS [] - SWITCHED TO MOCK FOR TESTING
  let [artists, setArtists] = useState<Artist[]>([]); // WAS [] - SWITCHED TO MOCK FOR TESTING
  let [genres, setGenres] = useState<GenreDb>({}); // WAS {} - SWITCHED TO MOCK FOR TESTING
  let [displayedTracks, setDisplayedTracks] = useState<TrackItem[]>([]);

  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) return;

    const fetchData = async () => {
      await getTokens(code);
      if (tracks.length === 0) {
       const trackList = getTracks(code).then((trackList) => {
         console.log(trackList.length + ' tracks received');
         setTracks(trackList);
       });
      }
      if (artists.length === 0) {
        fetchArtistsWithOffset(code, setArtists).then((genres) => {
          setGenres(genres)
        });
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const selectedGenres = filterSelectedGenres(genres);
    const updatedArtists = markGenreArtists(artists, selectedGenres);
    setArtists(updatedArtists);
  }, [genres]);

  function selectGenreHandler (genreName: string) {
    // TODO: RESORTING BASED ON MATCH
    const newGenreDb = Object.assign({}, genres);
    newGenreDb[genreName].selected = !newGenreDb[genreName].selected;
    setGenres(newGenreDb);
  }

  function toggleArtistHandler (artistId: string) {
    const updatedArtists = artistToggleUpdate(artistId, artists);
    setArtists(updatedArtists);
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
      <Genres genreList={genres} artists={artists} selectHandler={selectGenreHandler}/>

      {/* // Display selected artists & artists deselected manually by user */}
      <Artists artistList={artists.filter((artist) => artist.selected)} toggleHandler={toggleArtistHandler}/>
      <Playlist tracks={getSelectedTracks(artists, tracks)} createHandler={createPlaylistHandler}/>


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