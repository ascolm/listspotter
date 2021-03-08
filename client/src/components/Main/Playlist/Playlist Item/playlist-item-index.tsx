import './playlist-item-style.scss';
import { TrackItem } from 'interfaces/spotifyObjects';
import { convertMsToMinsAndSecs, joinArtistNames } from './playlist-item-helpers';
import moment from 'moment';



export interface Props {
  track: TrackItem,
  toggleHandler: (trackId: string) => void,
  disabled: boolean
}

const PlaylistItem: React.FC<Props> = ({ track, disabled, toggleHandler }) => {
  return (
      <tr className={'playlist-item-container' + (disabled ? ' user-disabled':'')} onClick = {() => toggleHandler(track.track.id)}>
        <td>{track.track.name}</td>
        <td>{joinArtistNames(track)}</td>
        <td>{track.track.album.name}</td>
        <td>{moment(track.added_at).fromNow()}</td>
        <td>{convertMsToMinsAndSecs(track.track.duration_ms)}</td>
      </tr>
  );
}

export default PlaylistItem;