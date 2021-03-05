import * as React from 'react';
import { useState } from 'react';
import './playlist-style.scss';
import PlaylistItem from './Playlist Item/playlist-item-index';
import { TrackItem } from '../../../interfaces/spotifyObjects';

export interface Props {
  tracks: TrackItem[]
}

const Playlist: React.FC<Props> = ({ tracks }) => {
  let [nameField, setNameField] = useState('');

  function submitHandler (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(nameField);
  }

  return (
    <div className='playlist-container'>
      <form action="submit" onSubmit={submitHandler}>
      <input type='text' className='playlist-title' placeholder='Playlist Name' onChange={(e) => setNameField(e.target.value)}/>
      </form>
      {tracks.map((track) => <PlaylistItem track={track}/>)}
  </div>
  );
}

export default Playlist;