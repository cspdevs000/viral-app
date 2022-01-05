import React from 'react';
import Login from './Login';
import {Navigate} from 'react-router-dom';
import useToken from './useToken';

export default function LoginPage() {
  const {token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return(
    
      <Navigate to='/home' />
  );
}