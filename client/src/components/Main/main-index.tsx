import * as React from 'react';
import { useLocation } from 'react-router-dom';
// import { useState } from 'react';

export interface Props {
}

const Main: React.FC<Props> = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return (
    <div>
      <h1>Main'e hoşgeldiniz aq.</h1>
      <p>{searchParams.get('code')}</p>
    </div>
  );
}

export default Main;