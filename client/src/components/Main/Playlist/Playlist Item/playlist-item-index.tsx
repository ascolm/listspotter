import './playlist-item-style.scss';
import { TrackItem } from 'interfaces/spotifyObjects'

export interface Props {
  track: TrackItem,
  toggleHandler: (trackId: string) => void,
  disabled: boolean
}

const PlaylistItem: React.FC<Props> = ({ track, disabled, toggleHandler }) => {
  return (
      <tr className={'playlist-item-container' + (disabled ? ' user-disabled':'')} onClick = {() => toggleHandler(track.track.id)}>
        <td>{track.track.name}</td>
        <td>{track.track.artists[0].name}</td>
        <td>{track.track.album.name}</td>
        <td>{track.added_at}</td>
        <td>{track.track.duration_ms}</td>
      </tr>
  );
}

export default PlaylistItem;