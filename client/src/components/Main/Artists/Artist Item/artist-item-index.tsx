import './artist-item-style.scss';
import * as React from 'react';
import { Artist } from 'interfaces/spotifyObjects';

export interface Props {
  artist: Artist;
}

const ArtistItem: React.FC<Props> = ({ artist }) => {

  return (
    <a className='artist-item-container'>
      {artist.images[0] && <img src={artist.images[0].url} alt={'Image of artist ' + artist.name}/>}
      <p>{artist.name}</p>
    </a>
  );
}

export default ArtistItem;