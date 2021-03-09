import * as React from 'react';
import { useState, useEffect } from 'react';
import './playlist-style.scss';
import PlaylistItem from './Playlist Item/playlist-item-index';
import { trackToggleUpdate } from './playlist-helpers';
import { TrackItem } from 'interfaces/spotifyObjects';
import { WaveSpinner, CircleSpinner } from 'react-spinners-kit';

export interface Props {
  tracks: TrackItem[],
  createHandler: (playlistName: string, trackURIs: string[]) => void,
  loaded: boolean
}

const Playlist: React.FC<Props> = ({ tracks, createHandler, loaded }) => {
  let [nameField, setNameField] = useState('');
  let [disabledTrackIds, setDisabledTrackIds] = useState<string[]>([]); // If tracks passed from parent change, playlist re renders and applies disabled tracks. If the user disables a song, it does not bubble back to parent (so other components' re-render is prevented)
  let [savingPlaylist, setSavingPlaylist] = useState<boolean>(false);

  function toggleTrackHandler (trackId : string) {
    if (disabledTrackIds.includes(trackId)) {
      setDisabledTrackIds(disabledTrackIds.filter((disabledId) => disabledId !== trackId));
    } else {
      const updatedDisabledTrackIds = [...disabledTrackIds, trackId];
      setDisabledTrackIds(updatedDisabledTrackIds);
    }
  }

  async function submitHandler (e: React.FormEvent<HTMLFormElement>) {
    setSavingPlaylist(true);
    e.preventDefault();
    const trackURIs = tracks.filter((track) => !disabledTrackIds.some((disabledId) => disabledId === track.track.id)).map((track) => track.track.uri);
    setNameField('');
    await createHandler(nameField, trackURIs);
    setSavingPlaylist(false);
  }

  return (
    <div className={'playlist-container' + (loaded ? ' loaded':'')}>

      <div className='loading-screen'>
        <WaveSpinner size={30} color='var(--spotify-white)' loading={!loaded}/>
        <p className={'loading-text' + (loaded ? ' loaded':'')}>Loading your tracks...</p>
      </div>
      <form action="submit" onSubmit={submitHandler} className='create-playlist'>
        <input type='text' className={'playlist-title' + (loaded ? ' loaded':'')} placeholder='Playlist Name' value={nameField} onChange={(e) => setNameField(e.target.value)}/>
        {savingPlaylist ? <div className='save-loader'><CircleSpinner size={15} loading={loaded} color='var(--spotify-green)'/></div> : <button className={'button-create' + (loaded ? ' loaded':'')} onClick={()=>submitHandler}><i className="fas fa-plus-circle"></i></button>}
      </form>


      {loaded &&
        <table className='track-table'>
          <thead>
            <tr className={'playlist-headers' + (loaded ? ' loaded':'')}>
              <th>TITLE</th>
              <th>ARTIST</th>
              <th>ALBUM</th>
              <th>ADDED</th>
              <th>LENGTH</th>
            </tr>
          </thead>
          <tbody className='track-list'>
            {tracks.map((track) => <PlaylistItem track={track} key={track.track.id} disabled={disabledTrackIds.includes(track.track.id)} toggleHandler={toggleTrackHandler}/>)}
          </tbody>
        </table>
      }
  </div>
  );
}

export default Playlist;