import styles from './PlaylistItem.module.scss';
import { TrackItem } from 'interfaces/spotifyObjects';
import { convertMsToMinsAndSecs, joinArtistNames } from './helpers';
import moment from 'moment';
import clsx from 'clsx';

export interface Props {
  track: TrackItem,
  toggleHandler: (trackId: string) => void,
  disabled: boolean
}

const PlaylistItem: React.FC<Props> = ({ track, disabled, toggleHandler }) => {
  return (
      <tr className={clsx(styles.base, disabled && styles.userDisabled)} onClick = {() => toggleHandler(track.track.id)}>
        <td>{track.track.name}</td>
        <td>{joinArtistNames(track)}</td>
        <td>{track.track.album.name}</td>
        <td>{moment(track.added_at).fromNow()}</td>
        <td>{convertMsToMinsAndSecs(track.track.duration_ms)}</td>
      </tr>
  );
}

export default PlaylistItem;