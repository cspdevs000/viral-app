import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';


class Profile extends Component {

  render() {
    return (
      <div>
        {<NavigationBar />}

        <h2>Dashboard</h2>
        <h3>user data</h3>
        <h3>more user data</h3>
      </div>

    );
  }
}

export default Profile;