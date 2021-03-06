import './artists-style.scss';
import { Artist } from '../../../interfaces/spotifyObjects';
import ArtistItem from './Artist Item/artist-item-index';

export interface Props {
  artistList: Artist[],
}

const Artists: React.FC<Props> = ({ artistList }) => {
  return (
    // SORT ARTISTS BY ALPHABETICAL ORDER
    <div className='artists-container'>
      {artistList.sort((a, b) => a.name < b.name ? -1 : 1)
      .map((artist) => <ArtistItem artist={artist}/>)}
    </div>
  );
}

export default Artists;