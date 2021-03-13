import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render, screen } from '@testing-library/react';
import PlaylistItem from '../playlist-item-index';
import { singleTrack } from '../../../../../devtools/dataMocks';
import {
  convertMsToMinsAndSecs,
  joinArtistNames,
} from '../playlist-item-helpers';
import moment from 'moment';

describe('Playlist Item', () => {
  it('appears on screen', () => {
    render(
      <table>
        <tbody>
          <PlaylistItem track={singleTrack} />
        </tbody>
      </table>
    );
  });

  it('should render the correct track info (track name, album name, etc.)', () => {
    render(
      <table>
        <tbody>
          <PlaylistItem track={singleTrack} />
        </tbody>
      </table>
    );

    const name = screen.getByText(singleTrack.track.name);
    expect(name).toBeInTheDocument();
    const albumName = screen.getByText(singleTrack.track.album.name);
    expect(albumName).toBeInTheDocument();
    const trackAdded = screen.getByText(moment(singleTrack.added_at).fromNow());
    expect(trackAdded).toBeInTheDocument();
    const artists = screen.getByText(joinArtistNames(singleTrack));
    expect(artists).toBeInTheDocument();
    const duration = screen.getByText(
      convertMsToMinsAndSecs(singleTrack.track.duration_ms)
    );
    expect(duration).toBeInTheDocument();
  });

  it('should inherit the disabled class if disabled is true', () => {
    render(
      <table>
        <tbody>
          <PlaylistItem track={singleTrack} disabled={true} />
        </tbody>
      </table>
    );

    const track = screen.getByTestId('playlist_item_trTag');
    expect(track).toHaveClass('user-disabled');
  });
});
