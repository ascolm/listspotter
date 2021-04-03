import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TrackItem, Artist, PlaylistData, PlaylistCover } from 'interfaces/spotifyObjects';
import { GenreDb } from 'interfaces/genreObjects';
import Genres from './Genres/genres-index';
import { getTokens, createPlaylist, getTracks, getPlaylistCover } from 'apiService';
import './main-style.scss';
import {
  fetchArtistsWithOffset,
  getSelectedTracks,
  markGenreArtists,
  filterSelectedGenres,
  artistToggleUpdate
 } from './main-helpers';
import Artists from './Artists/artists-index';
import Playlist from './Playlist/playlist-index';
import icon from './Spotify_Icon_RGB_Green.png';
import PlaylistCreatedModal from './Modal/modal-index';

const Main: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const coverGenerationWaitTime = 500; // Spotify takes a while to generate playlist cover image after playlist is created

  let [tracks, setTracks] = useState<TrackItem[]>([]);
  let [artists, setArtists] = useState<Artist[]>([]);
  let [genres, setGenres] = useState<GenreDb>({});
  let [createdPlaylist, setCreatedPlaylist] = useState<any>({});
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

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
    const playlistData: PlaylistData = await createPlaylist(code, playlistName, trackURIs);
    await new Promise((resolve, reject) => setTimeout(() => resolve(''), coverGenerationWaitTime));
    const playlistCover: PlaylistCover[] = await getPlaylistCover(code, playlistData.id);
    playlistData.cover = playlistCover[0];
    setCreatedPlaylist(playlistData);
  }

  useEffect(() => {
    if (Object.keys(createdPlaylist).length > 0) {
      openModal();
    }
  }, [createdPlaylist])

  return (
    <div className='main-container'>

      <PlaylistCreatedModal isOpen={modalIsOpen} onRequestClose={closeModal} playlist={createdPlaylist}/>
      <div className='title'>
        <h1>Listspotter.</h1>
        <p>Powered by <img src={icon} className='spotify-icon' alt="Spotify icon"/></p>
      </div>

      <div className="genre-artist-wrapper">
        <Genres genreList={genres} artists={artists} selectHandler={selectGenreHandler} loaded={Object.keys(genres).length > 0}/>
        <Artists artistList={artists.filter((artist) => artist.selected)} loaded={Object.keys(genres).length > 0} toggleHandler={toggleArtistHandler}/>
      </div>

      <div className="playlist-wrapper">
        {<Playlist tracks={getSelectedTracks(artists, tracks)} loaded={tracks.length > 0} createHandler={createPlaylistHandler}/>}
      </div>

    </div>
  );
}

export default Main;