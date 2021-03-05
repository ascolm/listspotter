import './artist-item-style.scss';
import * as React from 'react';
import { Artist } from '../../../../interfaces/spotifyObjects';

export interface Props {
  artist: Artist;
}

const ArtistItem: React.FC<Props> = ({ artist }) => {

  return (
    <a className='artist-item-container'>
      {artist.name}
    </a>
  );
}

export default ArtistItem;