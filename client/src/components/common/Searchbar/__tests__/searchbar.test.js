import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../searchbar-index';

describe('SearchBar', () => {
  it('should render the search-bar', () => {
    const { container } = render(<SearchBar />);
    const div = container.querySelector('div');
    expect(div).toBeInTheDocument();
  });
});
