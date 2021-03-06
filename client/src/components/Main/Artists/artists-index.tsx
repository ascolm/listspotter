import './artists-style.scss';
import { Artist } from 'interfaces/spotifyObjects';
import ArtistItem from './Artist Item/artist-item-index';

export interface Props {
  artistList: Artist[],
  toggleHandler: (artistId: string) => void
}

const Artists: React.FC<Props> = ({ artistList, toggleHandler }) => {
  return (
    // SORT ARTISTS BY ALPHABETICAL ORDER
    <div className='artists-container'>
      {artistList.sort((a, b) => a.name < b.name ? -1 : 1)
      .map((artist) => <ArtistItem artist={artist} key={artist.id} toggleHandler={toggleHandler}/>)}
    </div>
  );
}

export default Artists;