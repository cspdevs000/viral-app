import './NavigationBar.css';
import React from 'react';
import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const { handleLogout, user } = props;
  console.log(user);
  const { id, name, email, exp } = user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();

  // make a condition that compares exp and current time
  if (currentTime >= expirationTime) {
    handleLogout();
    alert('Session has ended. Please login to continue.');
  }

  
  const userData = user ?
    (<div>
      <div>
        {<NavigationBar />}
      </div>
      <div>
        <h1>profile page</h1>
      </div>
      <div>
        <table>
          <tr>
            <th colspan="1"></th>
            <th colspan="2"></th>
          </tr>
          <tr>
            <td>Name: {name}</td>
          </tr>
          <tr>
            <td>Email: {email}</td>
          </tr>
          <tr>
            <td>Account ID: {id}</td>
          </tr>
        </table>
      </div>
    </div>) : <h2>Loading...</h2>

  const errorDiv = () => {
    return (
      <div>
        <h3>Please <Link to="/login">login</Link> to view this page</h3>
      </div>
    );
  };

  return (
    <div>
      {user ? userData : errorDiv()}
    </div>
  );

}

export default Profile;