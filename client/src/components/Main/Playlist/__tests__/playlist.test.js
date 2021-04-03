import React from 'react';
import ReactDOM from 'react-dom';
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Playlist from '../playlist-index';
import { artistList, tracksMock } from '../../../../devtools/dataMocks';
import { act } from 'react-dom/test-utils';

describe('Playlist', () => {
  it('renders loading message when playlist are being loaded', () => {
    render(<Playlist loaded={false} />);
    const message = screen.getByText('Loading your tracks...');
    expect(message).toBeInTheDocument();
  });

  it('displays the table if finished loading', () => {
    render(<Playlist loaded={true} tracks={tracksMock} />);
    const titleLabel = screen.getByText('TITLE');
    expect(titleLabel).toBeInTheDocument();
    const artistLabel = screen.getByText('ARTIST');
    expect(artistLabel).toBeInTheDocument();
    const albumLabel = screen.getByText('ALBUM');
    expect(albumLabel).toBeInTheDocument();
    const addedLabel = screen.getByText('ADDED');
    expect(addedLabel).toBeInTheDocument();
    const lengthLabel = screen.getByText('LENGTH');
    expect(lengthLabel).toBeInTheDocument();

    const tableWrapper = screen.getByTestId('playlist_test_div');
    expect(tableWrapper).toBeInTheDocument();
  });

  it('renders the form correctly', () => {
    render(<Playlist loaded={true} tracks={tracksMock} />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('renders the text input correctly', () => {
    render(<Playlist loaded={true} tracks={tracksMock} />);
    const textbox = screen.getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });

  it('should display the correct user input', () => {
    render(<Playlist loaded={true} tracks={tracksMock} />);
    const textbox = screen.getByRole('textbox');
    expect(textbox.value).toBe('');
    fireEvent.change(textbox, { target: { value: 'MyNewPlaylist' } });
    expect(textbox.value).toBe('MyNewPlaylist');
  });

  it('should call the handler function when button is clicked', async () => {
    const createHandler = jest.fn();

    render(
      <Playlist
        createHandler={createHandler}
        loaded={true}
        tracks={tracksMock}
      />
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(createHandler).toHaveBeenCalledTimes(1);

    await waitForElementToBeRemoved(() =>
      screen.getByTestId('playlist_test_loader')
    );
  });
});
