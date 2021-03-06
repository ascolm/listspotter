import * as React from 'react';
import { useState } from 'react';
import './playlist-style.scss';
import PlaylistItem from './Playlist Item/playlist-item-index';
import { TrackItem } from 'interfaces/spotifyObjects';

export interface Props {
  tracks: TrackItem[],
  createHandler: (playlistName: string, trackURIs: string[]) => void;
}

const Playlist: React.FC<Props> = ({ tracks, createHandler }) => {
  let [nameField, setNameField] = useState('');

  function submitHandler (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trackURIs = tracks.map((track) => track.track.uri);
    createHandler(nameField, trackURIs);
  }

  return (
    <div className='playlist-container'>
      <form action="submit" onSubmit={submitHandler}>
      <input type='text' className='playlist-title' placeholder='Playlist Name' onChange={(e) => setNameField(e.target.value)}/>
      </form>
      {tracks.map((track) => <PlaylistItem track={track} key={track.track.id}/>)}
  </div>
  );
}

export default Playlist;