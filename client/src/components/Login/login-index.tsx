import * as React from 'react';
import { queryUrl } from './login-queryParams';

// import { useState, useEffect } from 'react';


export interface Props {
}

const Login: React.FC<Props> = () => {
  return (
    <div>
      <h1>This is the login page canım.</h1>
      <a href={queryUrl}>LOGIN</a>
    </div>
   );
}

export default Login;