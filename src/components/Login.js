import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import NavigationBar from './NavigationBar';
import axios from 'axios';
import './NavigationBar.css';
import './Login.css';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
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
<<<<<<< HEAD
             this.props.nowCurrentUser(decoded); // funnction passed down as props.
=======
            this.props.nowCurrentUser(decoded); // funnction passed down as props.
>>>>>>> 20450d8f0f9cd25dfad7113d151e112b3af53acc
        })
        .catch(error => {
            console.log('===> Error on login', error);
            alert('Either email or password is incorrect. Please try again');
        });
  };


  render() {
<<<<<<< HEAD
    console.log('user', this.props.user)
=======
    console.log(this.props.user);
>>>>>>> 20450d8f0f9cd25dfad7113d151e112b3af53acc
    if (this.props.user) 
    return <Navigate to="/home" />;

    return (
      <div>

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

                    <div className="field">
                      <div className="control">
                      <div className="field">
                  <div className="control">
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      autoComplete="username"
                      value={this.state.email}
                      onChange={this.handleEmail.bind(this)}
                      required
                    />
                  </div>
                </div>
                      </div>
                    </div>

                    <div className="field">
                  <div className="control">
                    <input
                      type="password"
                      placeholder="**********"
                      autoComplete="current-password"
                      value={this.state.password}
                      onChange={this.handlePassword.bind(this)}
                      required
                    />
                  </div>
                </div>
                    <button className="button is-block is-primary is-fullwidth is-medium" type="submit" >Submit</button>
                    <br />
                  </form>
                </div>
              </div>
            </div>
            <div className="column is-8 is-offset-2">
              <br />
              <nav className="level">
                <div className="level-right">
                  <small className="level-item" >
                    &copy; Viral Website. All Rights Reserved.
                  </small>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default Login;