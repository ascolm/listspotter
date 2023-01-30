import * as React from 'react';
import { useState } from 'react';
import styles from './Playlist.module.scss';
import PlaylistItem from './Playlist Item/PlaylistItem';
import { TrackItem } from 'interfaces/spotifyObjects';
import { WaveSpinner, CircleSpinner } from 'react-spinners-kit';
import clsx from 'clsx';

export interface Props {
  tracks: TrackItem[],
  createHandler: (playlistName: string, trackURIs: string[]) => void,
  loaded: boolean
}

const Playlist: React.FC<Props> = ({ tracks, createHandler, loaded }) => {
  let [nameField, setNameField] = useState('');
  let [disabledTrackIds, setDisabledTrackIds] = useState<string[]>([]);
  let [savingPlaylist, setSavingPlaylist] = useState<boolean>(false);

  function toggleTrackHandler (trackId : string) {
    if (disabledTrackIds.includes(trackId)) {
      setDisabledTrackIds(disabledTrackIds.filter((disabledId) => disabledId !== trackId));
    } else {
      const updatedDisabledTrackIds = [...disabledTrackIds, trackId];
      setDisabledTrackIds(updatedDisabledTrackIds);
    }
  }

  async function submitHandler (e: React.FormEvent<HTMLFormElement>) {
    setSavingPlaylist(true);
    e.preventDefault();
    const trackURIs = tracks.filter((track) => !disabledTrackIds.some((disabledId) => disabledId === track.track.id)).map((track) => track.track.uri);
    setNameField('');
    await createHandler(nameField, trackURIs);
    setSavingPlaylist(false);
  }
  return (
    <div className={clsx(styles.base, loaded && styles.loaded)}>
      <div className={styles.loadingScreen}>
        <WaveSpinner size={30} color='var(--spotify-white)' loading={!loaded}/>
        <p className={clsx(styles.loadingText, loaded && styles.loaded)}>Loading your tracks...</p>
      </div>
      <form action="submit" onSubmit={submitHandler} className={styles.createPlaylist}>
        <input type='text' className={clsx(styles.playlistTitle, loaded && styles.loaded)} placeholder='Playlist Name' value={nameField} onChange={(e) => setNameField(e.target.value)}/>
        {savingPlaylist ? <div className={styles.saveLoader}><CircleSpinner size={15} loading={loaded} color='var(--spotify-green)'/></div> : <button className={clsx(styles.buttonCreate, loaded && styles.loaded)} onClick={()=>submitHandler}><i className="fas fa-plus-circle"></i></button>}
      </form>


      {loaded &&
      <div className={styles.tableWrapper}>
        <table className={styles.trackTable}>
          <thead>
            <tr className={clsx(styles.playlistHeaders, loaded && styles.loaded)}>
              <th>TITLE</th>
              <th>ARTIST</th>
              <th>ALBUM</th>
              <th>ADDED</th>
              <th>LENGTH</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => <PlaylistItem track={track} key={track.track.id} disabled={disabledTrackIds.includes(track.track.id)} toggleHandler={toggleTrackHandler}/>)}
          </tbody>
        </table>
      </div>
      }
  </div>
  );
}

export default Playlist;