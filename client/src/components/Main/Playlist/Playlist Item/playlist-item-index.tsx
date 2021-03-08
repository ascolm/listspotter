import './playlist-item-style.scss';
import { TrackItem } from 'interfaces/spotifyObjects'

export interface Props {
  track: TrackItem,
  toggleHandler: (trackId: string) => void
}

const PlaylistItem: React.FC<Props> = ({ track, toggleHandler }) => {
  return (
    <a className={'playlist-item-container' + (track.userDisabled ? ' user-disabled':'')} onClick = {() => toggleHandler(track.track.id)}>
      {track.track.name}
  </a>
  );
}

export default PlaylistItem;