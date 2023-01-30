import * as React from 'react';
import { useState } from 'react';
import styles from './Genres.module.scss';
import GenreItem from './Genre Item/GenreItem';
import { GenreDb } from 'interfaces/genreObjects';
import { Artist } from 'interfaces/spotifyObjects';
import { getSortedGenreKeys, getMatchingGenres, countUnselected } from './helpers';
import { WaveSpinner } from 'react-spinners-kit';
import SearchBar from '@/components/common/Searchbar/SearchBar';
import clsx from 'clsx';

export interface Props {
  genreList: GenreDb,
  artists: Artist[],
  selectHandler: (genreName: string) => void;
  loaded: boolean;
}

const Genres: React.FC<Props> = ({genreList, artists, selectHandler, loaded}) => {
  let [searchValue, setSearchValue] = useState('');

  return (

    <div className={clsx(styles.base, loaded && styles.loaded)}>
      {loaded ?
        <>
        <div className={styles.genreSearch}>
          <SearchBar placeholder='Search genres' searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>

        <div className={clsx(styles.genresContainer, loaded && styles.loaded)}>
        {getSortedGenreKeys(searchValue ? getMatchingGenres(searchValue, genreList) : genreList, artists.filter((artist) => artist.selected)).map((genreName) => {
            const artistCount = countUnselected(genreList, genreName, artists);
            const isSelected = genreList[genreName].selected;
            return (artistCount || isSelected) && <GenreItem key={genreName} genreName={genreName} artistCount={artistCount} selectHandler={selectHandler} selected={genreList[genreName].selected}/>
          })}
        </div>
        </>
        :
        <div className={styles.genreLoadingContainer}>
          <WaveSpinner size={30} color="var(--spotify-white)" loading={!loaded}/>
          <p className={styles.loadingGenresMessage}>Loading your genres...</p>
        </div>
      }
    </div>
  );
}

export default Genres;