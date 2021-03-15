import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, render, screen } from '@testing-library/react';
import ArtistItem from '../artist-item-index';
import { singleArtist } from '../../../../../devtools/dataMocks';

describe('Artist Item', () => {
  it('appears on screen', () => {
    render(<ArtistItem artist={singleArtist} />);
  });

  it('displays the artist name', () => {
    render(<ArtistItem artist={singleArtist} />);
    const artist = screen.getByText(singleArtist.name);
    expect(artist).toBeInTheDocument();
  });

  it('should correctly display the image or alternate url', () => {
    render(<ArtistItem artist={singleArtist} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', singleArtist.images[0].url);
    expect(image).toHaveAttribute(
      'alt',
      `Image of artist ${singleArtist.name}`
    );
  });

  it('should correctly adjust the opacity when clicked', () => {
    singleArtist.userDisabled = true;
    render(<ArtistItem artist={singleArtist} />);
    const artist = screen.getByTestId('artist_item_aTag');
    expect(artist).toHaveClass('user-disabled');
  });
});
