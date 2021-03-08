import * as React from 'react';
import { useState, useEffect } from 'react';
import './playlist-style.scss';
import PlaylistItem from './Playlist Item/playlist-item-index';
import { trackToggleUpdate } from './playlist-helpers';
import { TrackItem } from 'interfaces/spotifyObjects';

export interface Props {
  tracks: TrackItem[],
  createHandler: (playlistName: string, trackURIs: string[]) => void,
  loaded: boolean
}

const Playlist: React.FC<Props> = ({ tracks, createHandler, loaded }) => {
  let [nameField, setNameField] = useState('');
  let [disabledTrackIds, setDisabledTrackIds] = useState<string[]>([]); // If tracks passed from parent change, playlist re renders and applies disabled tracks. If the user disables a song, it does not bubble back to parent (so other components' re-render is prevented)

  function toggleTrackHandler (trackId : string) {
    if (disabledTrackIds.includes(trackId)) {
      setDisabledTrackIds(disabledTrackIds.filter((disabledId) => disabledId !== trackId));
    } else {
      const updatedDisabledTrackIds = [...disabledTrackIds, trackId];
      setDisabledTrackIds(updatedDisabledTrackIds);
    }
  }

  function submitHandler (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trackURIs = tracks.filter((track) => !disabledTrackIds.some((disabledId) => disabledId === track.track.id)).map((track) => track.track.uri);
    createHandler(nameField, trackURIs);
  }

  return (
    <div className={'playlist-container' + (loaded ? ' loaded':'')}>
      <p className={'loading-text' + (loaded ? ' loaded':'')}>Loading your tracks...</p>
      <form action="submit" onSubmit={submitHandler} className='create-playlist'>
        <input type='text' className={'playlist-title' + (loaded ? ' loaded':'')} placeholder='Playlist Name' onChange={(e) => setNameField(e.target.value)}/>
        <a className={'button-create' + (loaded ? ' loaded':'')} type='submit'><i className="fas fa-plus-circle"></i></a>
        {/* <a className='button-create'>CREATE PLAYLIST</a> */}
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