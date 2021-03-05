import './genre-item-style.scss';
import * as React from 'react';

export interface Props {
  genreName: string,
  artistCount: number,
  selected: boolean,
  selectHandler: (genreName: string) => void
}

const GenreItem: React.FC<Props> = ({ genreName, artistCount, selected, selectHandler }) => {

  function clickHandler () {
    selectHandler(genreName);
  }

  return (
    <a className={'genre-item-container' + (selected ? ' selected' : '')} onClick={clickHandler}>
      {genreName} : {artistCount}
    </a>
  );
}

export default GenreItem;