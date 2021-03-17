import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Main from '../main-index';
import { useLocation } from 'react-router';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Main', () => {
  let utils;

  beforeEach(() => {
    const history = createMemoryHistory();
    history.push('/main');

    utils = render(
      <Router history={history}>
        <Main />
      </Router>
    );
  });

  it('should render the main container div', () => {
    const mainDiv = utils.container.querySelector('div');
    expect(mainDiv).toHaveClass('main-container');
  });

  it('should render the Genres & Artist', () => {
    const genreAndArtist = utils.container.getElementsByClassName(
      'genre-artist-wrapper'
    );
    expect(genreAndArtist[0]).toBeInTheDocument();
  });
  it('should render the playlist wrapper', () => {
    const playlist = utils.container.getElementsByClassName('playlist-wrapper');
    expect(playlist[0]).toBeInTheDocument();
  });
});
