import './genres-style.scss';
import GenreItem from './Genre Item/genre-item-index';
import { GenreDb } from '../../../interfaces/genreObjects';
import { getSortedGenreKeys } from './genres-helpers';

export interface Props {
  genreList: GenreDb
}

const Genres: React.FC<Props> = ({genreList}) => {
  return (
    <div className='genres-container'>
      {getSortedGenreKeys(genreList).map((genreName) => {
        return <GenreItem genreName={genreName} artistCount={genreList[genreName].length}/>
      })}
    </div>
  );
}

export default Genres;