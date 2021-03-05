import './genres-style.scss';
import { GenreDb } from '../../../interfaces/genreObjects';
import { getSortedGenreKeys } from './genres-helpers';

export interface Props {
  genreList: GenreDb
}

const Genres: React.FC<Props> = ({genreList}) => {
  console.log(getSortedGenreKeys(genreList));
  return (
    <div className='genres-container'>
      {getSortedGenreKeys(genreList).map((genreName) => {
        return <p key={genreName}>{genreName}:{genreList[genreName].length}</p>
      })}
    </div>
  );
}

export default Genres;