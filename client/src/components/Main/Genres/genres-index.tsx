import './genres-style.scss';
import GenreItem from './Genre Item/genre-item-index';
import { GenreDb } from '../../../interfaces/genreObjects';
import { getSortedGenreKeys } from './genres-helpers';

export interface Props {
  genreList: GenreDb,
  selectHandler: (genreName: string) => void;
}

const Genres: React.FC<Props> = ({genreList, selectHandler}) => {
  return (
    <div className='genres-container'>
      {getSortedGenreKeys(genreList).map((genreName) => {
        return <GenreItem genreName={genreName} artistCount={genreList[genreName].artists.length} selectHandler={selectHandler} selected={genreList[genreName].selected}/>
      })}
    </div>
  );
}

export default Genres;