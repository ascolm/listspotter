import * as React from 'react';
import { useState } from 'react';
import './genres-style.scss';
import GenreItem from './Genre Item/genre-item-index';
import { GenreDb } from 'interfaces/genreObjects';
import { Artist } from 'interfaces/spotifyObjects';
import { getSortedGenreKeys, getMatchingGenres, countUnselected } from './genres-helpers';
import { WaveSpinner } from 'react-spinners-kit';
import SearchBar from 'components/common/Searchbar/searchbar-index';

export interface Props {
  genreList: GenreDb,
  artists: Artist[],
  selectHandler: (genreName: string) => void;
  loaded: boolean;
}

const Genres: React.FC<Props> = ({genreList, artists, selectHandler, loaded}) => {
  let [searchValue, setSearchValue] = useState('');

  return (

    <div className={'genres-wrapper' + (loaded ? ' loaded':'')}>
      {loaded ?
        <>
        <div className='genre-search'>
          <SearchBar placeholder='Search genres' searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>

        <div className={'genres-container' + (loaded ? ' loaded':'')}>
        {getSortedGenreKeys(searchValue ? getMatchingGenres(searchValue, genreList) : genreList, artists.filter((artist) => artist.selected)).map((genreName) => {
            return <GenreItem key={genreName} genreName={genreName} artistCount={countUnselected(genreList, genreName, artists)} selectHandler={selectHandler} selected={genreList[genreName].selected}/>
          })}
        </div>
        </>
        :
        <div className='genre-loading-container'>
          <WaveSpinner size={30} color="var(--spotify-white)" loading={!loaded}/>
          <p className='loading-genres-message'>Loading your genres...</p>
        </div>
      }
    </div>
  );
}

export default Genres;