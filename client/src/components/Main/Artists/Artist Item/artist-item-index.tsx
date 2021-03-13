import './artist-item-style.scss';
import * as React from 'react';
import { Artist } from 'interfaces/spotifyObjects';

export interface Props {
  artist: Artist;
  toggleHandler: (artistId: string) => void;
}

const ArtistItem: React.FC<Props> = ({ artist, toggleHandler }) => {
  return (
    <a
      data-testid={'artist_item_aTag'}
      className={
        'artist-item-container' + (artist.userDisabled ? ' user-disabled' : '')
      }
    >
      {artist.images[0] && (
        <img
          src={artist.images[0].url}
          alt={'Image of artist ' + artist.name}
          onClick={() => toggleHandler(artist.id)}
        />
      )}
      <p>{artist.name}</p>
    </a>
  );
};

export default ArtistItem;
