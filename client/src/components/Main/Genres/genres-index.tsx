import * as React from 'react';
import { useState } from 'react';
import './genres-style.scss';
import GenreItem from './Genre Item/genre-item-index';
import { GenreDb } from '../../../interfaces/genreObjects';
import { Artist } from '../../../interfaces/spotifyObjects';
import { getSortedGenreKeys, getMatchingGenres, countUnselected } from './genres-helpers';
import SearchBar from '../../common/Searchbar/searchbar-index';

export interface Props {
  genreList: GenreDb,
  displayedArtists: Artist[],
  selectHandler: (genreName: string) => void;
}

const Genres: React.FC<Props> = ({genreList, displayedArtists, selectHandler}) => {
  let [searchValue, setSearchValue] = useState('');

  return (
    <div className='genres-container'>
      <SearchBar placeholder='Search genres' searchValue={searchValue} setSearchValue={setSearchValue} />

      {getSortedGenreKeys(searchValue ? getMatchingGenres(searchValue, genreList) : genreList, displayedArtists).map((genreName) => {
          return <GenreItem genreName={genreName} artistCount={countUnselected(genreList, genreName, displayedArtists)} selectHandler={selectHandler} selected={genreList[genreName].selected}/>
        })}
    </div>
  );
}

export default Genres;