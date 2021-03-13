import './artists-style.scss';
import { Artist } from 'interfaces/spotifyObjects';
import ArtistItem from './Artist Item/artist-item-index';

export interface Props {
  artistList: Artist[];
  toggleHandler: (artistId: string) => void;
  loaded: boolean;
}

const Artists: React.FC<Props> = ({ artistList, toggleHandler, loaded }) => {
  return (
    // SORT ARTISTS BY ALPHABETICAL ORDER
    <div className={'artists-container' + (loaded ? ' loaded' : '')}>
      {artistList.length === 0 && (
        <p className="choose-genre-message">
          Choose a genre to view related artists.
        </p>
      )}
      {artistList
        .sort((a, b) => (a.name < b.name ? -1 : 1))
        .map((artist) => (
          <ArtistItem
            artist={artist}
            key={artist.id}
            toggleHandler={toggleHandler}
          />
        ))}
    </div>
  );
};

export default Artists;
