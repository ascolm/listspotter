import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Genres from '../genres-index';
import { genresMock } from '../../../../devtools/dataMocks';
import { artistsMock } from '../../../../devtools/dataMocks';
import { getSortedGenreKeys } from '../genres-helpers';

describe('Genres', () => {
  it('renders loading message when genres are being loaded', () => {
    render(<Genres loaded={false} />);
    const message = screen.getByText('Loading your genres...');
    expect(message).toBeInTheDocument();
  });

  it('renders correct number of genres in list', () => {
    const genreArr = getSortedGenreKeys(genresMock, artistsMock);
    render(
      <Genres genreList={genresMock} artists={artistsMock} loaded={true} />
    );
    const genreItems = screen.queryAllByTestId('genre_item_aTag');
    expect(genreItems.length).toBe(genreArr.length);
  });

  it('renders correct genre names in list', () => {
    const genreArr = getSortedGenreKeys(genresMock, artistsMock);
    render(
      <Genres genreList={genresMock} artists={artistsMock} loaded={true} />
    );

    //alternative for more foolproof testing is to map over genreArr, however this seems sufficient for these testing purposes
    const firstRandomGenre = screen.getByText(genreArr[2]);
    expect(firstRandomGenre).toBeInTheDocument();
    const secondRandomGenre = screen.getByText(genreArr[15]);
    expect(secondRandomGenre).toBeInTheDocument();
    const thirdRandomGenre = screen.getByText(genreArr[50]);
    expect(thirdRandomGenre).toBeInTheDocument();
    const fourthRandomGenre = screen.getByText(genreArr[100]);
    expect(fourthRandomGenre).toBeInTheDocument();
    const fifthRandomGenre = screen.getByText(genreArr[120]);
    expect(fifthRandomGenre).toBeInTheDocument();
  });

  it('renders the search bar correctly', () => {
    render(
      <Genres genreList={genresMock} artists={artistsMock} loaded={true} />
    );
    const searchBar = screen.getByPlaceholderText('Search genres');
    expect(searchBar).toBeInTheDocument();
  });
});
