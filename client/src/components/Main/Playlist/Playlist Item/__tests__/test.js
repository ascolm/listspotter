import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render, screen } from '@testing-library/react';
import PlaylistItem from '../playlist-item-index';
import { singleTrack } from '../../../../../devtools/dataMocks';

describe('Playlist Item', () => {
  fit('appears on screen', () => {
    render(
      <table>
        <tbody>
          <PlaylistItem track={singleTrack} />
        </tbody>
      </table>
    );
  });

  fit('should render the correct track info', () => {
    render(
      <table>
        <tbody>
          <PlaylistItem track={singleTrack} />
        </tbody>
      </table>
    );
    const name = screen.getByText(singleTrack.track.name);
    expect(name).toBeInTheDocument();
  });
});
