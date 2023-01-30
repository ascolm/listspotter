import * as React from 'react';
import { useState, useEffect } from 'react';
import { TrackItem, Artist, PlaylistData, PlaylistCover } from 'interfaces/spotifyObjects';
import { GenreDb } from 'interfaces/genreObjects';
import Genres from './Genres/Genres';
import { getToken, createPlaylist, getPlaylistCover, getSpecifiedArtists } from 'apiService';
import styles from './Main.module.scss';
import {
  fetchArtistsWithOffset,
  getSelectedTracks,
  markGenreArtists,
  filterSelectedGenres,
  artistToggleUpdate,
  identifyArtistsNotFollowed,
  generateGenres,
  fetchTracksWithOffset
 } from './helpers';
import Artists from './Artists/Artists';
import Playlist from './Playlist/Playlist';
import PlaylistCreatedModal from './Modal/Modal';
import { WaveSpinner } from 'react-spinners-kit';
import { useRouter } from 'next/router';

const Main: React.FC = () => {
  const router = useRouter();
  const codeFromURLParams = router.query['code'] as string;
  const [tracks, setTracks] = useState<TrackItem[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [genres, setGenres] = useState<GenreDb>({});
  const [createdPlaylist, setCreatedPlaylist] = useState<any>({});
  const [unfollowedArtists, setUnfollowedArtists] = useState<Artist[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  const code = process.env.NEXT_PUBLIC_ENV === 'development' ? '123' : codeFromURLParams;

  useEffect(() => {
    if (!code) return;
    
    getToken(code)
      .then(() => {
          fetchTracksWithOffset(code).then((trackList) => {
            setTracks(trackList);
          }).catch(() => console.log('Error fetching tracks.'));

          fetchArtistsWithOffset(code).then((artists) => {
            setArtists(artists);
            const genres = generateGenres(artists);
            setGenres(genres);
          }).catch(() => console.log('Error fetching artists.'));
      })
      .catch(() => console.log('Error getting a token.'))
   
  }, [code]);

  useEffect(() => {
    if (unfollowedArtists.length > 0) {
          setGenres(generateGenres(unfollowedArtists, genres));
          setIsSyncing(false);
      }
  }, [unfollowedArtists])

  useEffect(() => {
    if (tracks.length > 0) {
      const artistsNotFollowed = identifyArtistsNotFollowed(artists, tracks);
      setIsSyncing(true);

      getSpecifiedArtists(artistsNotFollowed)
        .then(additionalArtistData => {
          if (additionalArtistData) {
            setUnfollowedArtists(additionalArtistData);
            setArtists(artists => {
              const updatedArtists = [...artists, ...additionalArtistData]
              return updatedArtists;
            });
          } else {
            setIsSyncing(false);
          }
        })
        .catch(() => {
          console.log('Error updating lists with unfollowed artists.');
          setIsSyncing(false);
        });
    }
  }, [tracks.length])

  function selectGenreHandler (genreName: string) {
    const newGenreDb = Object.assign({}, genres);
    newGenreDb[genreName].selected = !newGenreDb[genreName].selected;
    setGenres(newGenreDb);

    const selectedGenres = filterSelectedGenres(newGenreDb);
    const updatedArtists = markGenreArtists(artists, selectedGenres);
    setArtists(updatedArtists);
  }

  function toggleArtistHandler (artistId: string) {
    const updatedArtists = artistToggleUpdate(artistId, artists);
    setArtists(updatedArtists);
  }

  async function createPlaylistHandler (playlistName: string, trackURIs: string[]) {
    if (!code || !playlistName) return;

    let playlistData: PlaylistData;
    try {
      playlistData = await createPlaylist(playlistName, trackURIs);
    }
    catch {
      console.log('Could not create the playlist.')
      return;
    }
    
    let playlistCover: PlaylistCover[];
    try {
      playlistCover = await getPlaylistCover(playlistData.id);
      playlistData.cover = playlistCover[0];
      setCreatedPlaylist(playlistData);
    } catch {
      console.log('Playlist created, however got an error when obtaining data to display.');
    }
  }

  useEffect(() => {
    if (Object.keys(createdPlaylist).length > 0) {
      openModal();
    }
  }, [createdPlaylist])

  const renderStatusMessage = () => {
    let message;
    if (Object.keys(genres).length > 0 && tracks.length === 0) {
      message = 'Your genres will update after tracks are loaded.';
    } else if (isSyncing) {
      message = 'Syncing saved tracks from unfollowed artists...';
    } else {
      return;
    }

    return (
      <div className={styles.syncMessageContainer}>
        <WaveSpinner color="var(--spotify-white)" size={7} />
        <span className={styles.syncMessage}>{message}</span>
      </div>
    )
  }

  return (
    <div className={styles.base}>
      <PlaylistCreatedModal isOpen={modalIsOpen} onRequestClose={closeModal} playlist={createdPlaylist}/>
      <div className={styles.title}>
        <h1>Listspotter.</h1>
        <p>Powered by <img src='./Spotify_Icon_RGB_Green.png' className={styles.spotifyIcon} alt="Spotify icon"/></p>
      </div>

      <div className={styles.genreArtistWrapper}>
        {renderStatusMessage()}
        <Genres genreList={genres} artists={artists} selectHandler={selectGenreHandler} loaded={Object.keys(genres).length > 0}/>
        <Artists artistList={artists.filter((artist) => artist.selected)} toggleHandler={toggleArtistHandler} />
        {Object.keys(genres).length > 0 && <p className={styles.scrollMessage}>SCROLL RIGHT</p>}
      </div>

      <div className={styles.playlistWrapper}>
        {<Playlist tracks={getSelectedTracks(artists, tracks)} loaded={tracks.length > 0} createHandler={createPlaylistHandler}/>}
      </div>

    </div>
  );
}

export default Main;