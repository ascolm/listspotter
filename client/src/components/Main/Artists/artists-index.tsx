import './artists-style.scss';
import { Artist } from '../../../interfaces/spotifyObjects';
import ArtistItem from './Artist Item/artist-item-index';

export interface Props {
  artistList: Artist[],
}

const Artists: React.FC<Props> = ({ artistList }) => {
  return (
    <div className='genres-container'>
      {artistList.map((artist) => <ArtistItem artist={artist}/>)}
    </div>
  );
}

export default Artists;