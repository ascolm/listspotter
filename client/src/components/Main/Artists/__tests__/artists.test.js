import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Artists from '../artists-index';
import { artistList } from '../../../../devtools/dataMocks';

describe('Artists', () => {
  it('renders message when list is empty', () => {
    render(<Artists artistList={[]} />);
    const message = screen.getByText('Choose a genre to view related artists.');
    expect(message).toBeInTheDocument();
  });

  //renders artists in list
  it('renders correct ammount in list', () => {
    render(<Artists artistList={artistList} />);
    const artistItems = screen.queryAllByTestId('artist_item_aTag');
    expect(artistItems.length).toBe(artistList.length);
  });

  it('renders the artists in list', () => {
    render(<Artists artistList={artistList} />);
    const firstArtist = screen.getByText('Wankelmut');
    expect(firstArtist).toBeInTheDocument();
    const secondArtist = screen.getByText('Dubioza kolektiv');
    expect(secondArtist).toBeInTheDocument();
    const thirdArtist = screen.getByText('Elvenking');
    expect(thirdArtist).toBeInTheDocument();
  });

  it('renders artists in alphabetical order', () => {
    render(<Artists artistList={artistList} />);
    const artistItems = screen.queryAllByTestId('artist_item_aTag');
    expect(artistItems[0]).toHaveTextContent('Dubioza kolektiv');
    expect(artistItems[1]).toHaveTextContent('Elvenking');
    expect(artistItems[2]).toHaveTextContent('Wankelmut');
  });
});
