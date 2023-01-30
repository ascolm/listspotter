import styles from './GenreItem.module.scss';
import * as React from 'react';
import clsx from 'clsx';

export interface Props {
  genreName: string,
  artistCount: number | '',
  selected: boolean,
  selectHandler: (genreName: string) => void
}

const GenreItem: React.FC<Props> = ({ genreName, artistCount, selected, selectHandler }) => {

  function clickHandler () {
    selectHandler(genreName);
  }

  return (
    <a className={clsx(styles.base, selected && styles.selected)} onClick={clickHandler}>
      {genreName} {selected ? '' : <span className='artistCount'>{' +' + artistCount + ' artist' + (artistCount > 1 ? 's' : '')}</span>}
    </a>
  );
}

export default GenreItem;