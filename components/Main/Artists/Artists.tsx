import styles from './Artists.module.scss';
import { Artist } from 'interfaces/spotifyObjects';
import ArtistItem from './Artist Item/ArtistItem';

export interface Props {
  artistList: Artist[],
  toggleHandler: (artistId: string) => void,
}

const Artists: React.FC<Props> = ({ artistList, toggleHandler }) => {
  return (
    <div className={styles.artistsContainer}>
      <div className={styles.flexWrapper}>
        {artistList.length === 0 && <p className={styles.chooseGenreMessage}>Choose a genre to view related artists.</p>}
        {artistList.sort((a, b) => a.name < b.name ? -1 : 1)
        .map((artist) => <ArtistItem artist={artist} key={artist.id} toggleHandler={toggleHandler}/>)}
      </div>
    </div>
  );
}

export default Artists;