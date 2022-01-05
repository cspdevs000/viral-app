import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';

import './Login.css';

async function loginUser(credentials) {
    return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div>
      {<NavigationBar />}

      <section class="container">
      <div class="columns is-multiline">
        <div class="column is-8 is-offset-2 register">
          <div class="columns">
            <div class="column left">
              <h1 style={{color: "black"}} class="title is-1">Viral</h1>
              <p>An elegant and robust website that answers any questions you have about COVID-19</p>
            </div>
            <div class="column right has-text-centered">
              <h1 style={{color: "black"}} class="title is-4">Log In</h1>
              <form onSubmit={handleSubmit}>

                <div class="field">
                  <div class="control">
                    <input class="input is-medium" type="text" placeholder="Username" onChange={e => setUserName(e.target.value)} required/>
                  </div>
                </div>

                <div class="field">
                    <div class="control">
                        <input class="input is-medium" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
                    </div>
                </div>
                <button class="button is-block is-primary is-fullwidth is-medium" type="submit" >Submit</button>
                <br />
              </form>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-2">
          <br/>
          <nav class="level">
            <div class="level-right">
              <small class="level-item" >
                &copy; Viral Website. All Rights Reserved.
              </small>
            </div>
          </nav>
        </div>
      </div>
    </section>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};