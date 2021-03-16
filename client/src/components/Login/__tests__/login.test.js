import React from 'react';
import ReactDOM from 'react-dom';
import { getByText, render, screen } from '@testing-library/react';
import Login from '../login-index';
import logo from '../Spotify_Logo_RGB_Green.png';
import { contextType } from 'react-modal';

describe('Login', () => {
  it('renders the correct h1', () => {
    const { container } = render(<Login />);
    const header = container.querySelector('h1');
    expect(header).toBeInTheDocument();
  });

  it('renders the correct logo image', () => {
    render(<Login />);
    const image = screen.getByAltText('');
    expect(image).toHaveAttribute('src', logo);
  });

  it('renders the correct button tag', () => {
    const { container } = render(<Login />);
    const button = container.querySelector('a');
    expect(button).toBeInTheDocument();
  });
});
