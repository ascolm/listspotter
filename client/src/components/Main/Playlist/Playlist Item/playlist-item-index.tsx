import './playlist-item-style.scss';
import { TrackItem } from 'interfaces/spotifyObjects'

export interface Props {
  track: TrackItem,
  toggleHandler: (trackId: string) => void,
  disabled: boolean
}

const PlaylistItem: React.FC<Props> = ({ track, disabled, toggleHandler }) => {
  return (
    <a className={'playlist-item-container' + (disabled ? ' user-disabled':'')} onClick = {() => toggleHandler(track.track.id)}>
      {track.track.name}
  </a>
  );
}

export default PlaylistItem;