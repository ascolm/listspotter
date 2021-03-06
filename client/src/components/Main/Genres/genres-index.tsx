import * as React from 'react';
import { useState } from 'react';
import './genres-style.scss';
import GenreItem from './Genre Item/genre-item-index';
import { GenreDb } from 'interfaces/genreObjects';
import { Artist } from 'interfaces/spotifyObjects';
import { getSortedGenreKeys, getMatchingGenres, countUnselected } from './genres-helpers';
import SearchBar from 'components/common/Searchbar/searchbar-index';

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
      {/* - Genres will be sorted based on how many artists they contain (descending). Selected genres are always on top (getSortedGenreKeys)
      - If there is a search value entered in the searchbar, filter only genres whose names match with the search value       (getMatchingGenres)
      - For each genre, the artist count shows only the number of artists in that genre that the user has not selected so far.
        For example, say "Rock" has 5 artists, and "Modern Rock" has 3 artists, which are also under "Rock". If the user selects "Modern Rock" first, those 3 artists will be on display. On the left hand side, "Rock" genre will now show an artist count of 2, because the other 3 has already been chosen with the "Modern Rock" tag. */}

      {getSortedGenreKeys(searchValue ? getMatchingGenres(searchValue, genreList) : genreList, displayedArtists).map((genreName) => {
          return <GenreItem genreName={genreName} artistCount={countUnselected(genreList, genreName, displayedArtists)} selectHandler={selectHandler} selected={genreList[genreName].selected}/>
        })}
    </div>
  );
}

export default Genres;