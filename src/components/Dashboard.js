import React from 'react';
import Login from './Login';
import useToken from './useToken';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';


export default function Dashboard() {
  const {token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return(
    <div>
      {<NavigationBar />}
      
      <h2>Dashboard</h2>
      <h3>user data</h3>
      <h3>more user data</h3>
    </div>
    
  );
}