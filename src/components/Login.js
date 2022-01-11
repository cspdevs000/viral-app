import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios';
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
        this.props.nowCurrentUser(decoded); // funnction passed down as props.
      })
      .catch(error => {
        console.log('===> Error on login', error);
        alert('Either email or password is incorrect. Please try again');
      });
  };


  render() {
    console.log(this.props.user);
    if (this.props.user)
      return <Navigate to="/home" />;
    // alert('You are already logged in');

    return (
        <div className="login-container">
          <div className="message">
            <h1 style={{ color: "black" }}>Viral</h1>
            <p>An elegant and robust website that answers any questions you have about COVID-19</p>
          </div>
          <div className="form-wrapper">
            <h1 style={{ color: "black" }}>Log In</h1>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="field">
                <input
                  type="email"
                  placeholder="email"
                  autoComplete="username"
                  value={this.state.email}
                  onChange={this.handleEmail.bind(this)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="**********"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.handlePassword.bind(this)}
                  required
                />
              </div>
              <br></br>
              <button className="button" type="submit" >Submit</button>
            </form>
            <br />
          </div>
          {/* <div className="footer">
            <small>
              &copy; Viral Website. All Rights Reserved.
            </small>
          </div> */}
        </div>
    );
  }
}

export default Login;