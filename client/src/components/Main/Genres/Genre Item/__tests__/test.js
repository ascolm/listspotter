import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import GenreItem from '../genre-item-index';

describe('Genre Item', () => {
  it('appears on screen', () => {
    render(<GenreItem />);
  });

  it('renders the right name', () => {
    const genreName = 'metal';
    render(<GenreItem genreName={genreName} />);
    const name = screen.getByText('metal');
    expect(name).toBeInTheDocument();
  });

  it('renders the right number of artists', () => {
    const artistCount = 3;
    render(<GenreItem artistCount={artistCount} />);
    const count = screen.getByText('+3 artists');
    console.log(count);
  });

  it('only renders genre name when selected', () => {
    const genreName = 'punk rock';
    render(<GenreItem genreName={genreName} selected={true} />);
  });
});
