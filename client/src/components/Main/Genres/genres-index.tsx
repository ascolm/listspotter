import * as React from 'react';
import { useState } from 'react';
import './genres-style.scss';
import GenreItem from './Genre Item/genre-item-index';
import { GenreDb } from '../../../interfaces/genreObjects';
import { getSortedGenreKeys, getMatchingGenres } from './genres-helpers';

export interface Props {
  genreList: GenreDb,
  selectHandler: (genreName: string) => void;
}

const Genres: React.FC<Props> = ({genreList, selectHandler}) => {
  let [searchValue, setSearchValue] = useState('');

  return (
    <div className='genres-container'>
      <input type='text' className='genres-search' placeholder='Search genres' onChange={(e) => setSearchValue(e.target.value)}/>

      {getSortedGenreKeys(searchValue ? getMatchingGenres(searchValue, genreList) : genreList).map((genreName) => {
          return <GenreItem genreName={genreName} artistCount={genreList[genreName].artists.length} selectHandler={selectHandler} selected={genreList[genreName].selected}/>
        })}
    </div>
  );
}

export default Genres;