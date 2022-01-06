import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
import './Login.css';


class Login extends Component {

  render() {
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
                  <form action="http://localhost:3000/users/login" method="POST">

                    <div className="field">
                      <div className="control">
                        <input className="input is-medium" type="text" name="email" placeholder="Email" onChange={e => (e.target.value)} required />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input className="input is-medium" type="password" name="password" placeholder="Password" onChange={e => (e.target.value)} required />
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