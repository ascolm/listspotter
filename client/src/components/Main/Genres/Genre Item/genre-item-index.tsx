import './genre-item-style.scss';
import * as React from 'react';
import { useState } from 'react';

export interface Props {
  genreName: string,
  artistCount: number,
  // genreSelect: () => void
}

const GenreItem: React.FC<Props> = ({ genreName, artistCount }) => {

  let [selected, setSelected] = useState(false);

  function clickHandler () {
    setSelected((prev) => !prev);
  }

  return (
    <a className={'genre-item-container' + (selected ? ' selected' : '')} onClick={clickHandler}>
      {genreName} : {artistCount}
    </a>
  );
}

export default GenreItem;