import * as React from 'react';
import { queryUrl } from './login-queryParams';
import './login-style.scss';
import logo from './Spotify_Logo_RGB_Green.png';

// import { useState, useEffect } from 'react';

export interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Listspotter.</h1>
        <p>
          Create playlists from your saved songs in{' '}
          <img className="spotify-logo" src={logo} alt="" /> using intuitive
          genre filters.
        </p>
        <a href={queryUrl} className="button-login">
          LOGIN
        </a>
      </div>
    </div>
  );
};

export default Login;
