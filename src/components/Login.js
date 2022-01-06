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

  handleSubmit = (e) => {
    e.preventDefault(); // at the beginning of a submit function
    const userData = { 
      email: this.state.email, 
      password: this.state.password
    };
    axios.post(`${REACT_APP_SERVER_URL}/users/login`, userData)
        .then(response => {
            const { token } = response.data;
            console.log('data here---', response.data)
            // save token to localStorage
            localStorage.setItem('jwtToken', token);
            // set token to headers
            setAuthToken(token);
            // decode token to get the user data
            const decoded = jwt_decode(token);
            // set the current user
            this.props.nowCurrentUser(decoded); // funnction passed down as props.
        })
        .catch(error => {
            console.log('===> Error on login', error);
            alert('Either email or password is incorrect. Please try again');
        });
  };


  render() {
    console.log(this.props.user)
    if (this.props.user) 
    return <Navigate to="/home" />;

    return (
      <div>
        {< NavigationBar />}

        <section className="container">
          <div className="columns is-multiline">
            <div className="column is-8 is-offset-2 register">
              <div className="columns">
                <div className="column left">
                  <h1 style={{ color: "black" }} className="title is-1">Viral</h1>
                  <p>An elegant and robust website that answers any questions you have about COVID-19</p>
                </div>
                <div className="column right has-text-centered">
                  <h1 style={{ color: "black" }} className="title is-4">Log In</h1>
                  <form onSubmit={this.handleSubmit.bind(this)}>

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