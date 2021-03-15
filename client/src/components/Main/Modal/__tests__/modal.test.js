import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import PlaylistCreatedModal from '../modal-index';
import { playlistMock } from '../../../../devtools/dataMocks';

describe('Playlist Created Modal', () => {
  it('renders a message when playlist is created', () => {
    render(
      <PlaylistCreatedModal
        testing={true}
        isOpen={true}
        playlist={playlistMock}
      />
    );
    const message = screen.getByText('Glorious Victory!');
    expect(message).toBeInTheDocument();
  });
});
