import * as React from 'react';
import { useState, useEffect } from 'react';
import './playlist-style.scss';
import PlaylistItem from './Playlist Item/playlist-item-index';
import { trackToggleUpdate } from './playlist-helpers';
import { TrackItem } from 'interfaces/spotifyObjects';

export interface Props {
  tracks: TrackItem[],
  createHandler: (playlistName: string, trackURIs: string[]) => void,
}

const Playlist: React.FC<Props> = ({ tracks, createHandler }) => {
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
    <div className='playlist-container'>
      <form action="submit" onSubmit={submitHandler}>
      <input type='text' className='playlist-title' placeholder='Playlist Name' onChange={(e) => setNameField(e.target.value)}/>
      </form>
      {tracks.map((track) => <PlaylistItem track={track} key={track.track.id} disabled={disabledTrackIds.includes(track.track.id)} toggleHandler={toggleTrackHandler}/>)}
  </div>
  );
}

export default Playlist;