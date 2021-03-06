import './playlist-item-style.scss';
import { TrackItem } from 'interfaces/spotifyObjects'

export interface Props {
  track: TrackItem
}

const PlaylistItem: React.FC<Props> = ({ track }) => {
  return (
    <a className='playlist-item-container'>
      {track.track.name}
  </a>
  );
}

export default PlaylistItem;