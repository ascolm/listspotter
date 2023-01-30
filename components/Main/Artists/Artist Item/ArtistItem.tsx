import styles from './ArtistItem.module.scss';
import * as React from 'react';
import { Artist } from 'interfaces/spotifyObjects';
import clsx from 'clsx';

export interface Props {
  artist: Artist;
  toggleHandler: (artistId: string) => void;
}

const ArtistItem: React.FC<Props> = ({ artist, toggleHandler }) => {

  return (
    <a className={clsx(styles.base, artist.userDisabled && styles.userDisabled)}>
      {artist.images[0] && <img src={artist.images[0].url} alt={'Image of artist ' + artist.name} onClick={() => toggleHandler(artist.id)}/>}
      <p>{artist.name}</p>
    </a>
  );
}

export default ArtistItem;