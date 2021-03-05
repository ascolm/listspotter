import * as React from 'react';
import './playlist-style.scss';
import PlaylistItem from './Playlist Item/playlist-item-index';
import { TrackItem } from '../../../interfaces/spotifyObjects';

export interface Props {
  tracks: TrackItem[]
}

const Playlist: React.FC<Props> = ({ tracks }) => {
  return (
    <div className='playlist-container'>
      {tracks.map((track) => <PlaylistItem track={track}/>)}
  </div>
  );
}

export default Playlist;