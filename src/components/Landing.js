import React, { Component } from 'react';

class Landing extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to Viral</h1>
                <h2>(landing page works)</h2>
                <div>
                <a href="/login">
                    <span>Login</span>
                </a>
                <br></br>
                <a href="/signup">
                    <span>Signup</span>
                </a>
                <br></br>
                <a href="/dashboard">
                    <span>Dashboard(user profile)</span>
                </a>
                </div>
            </div>
        );
    }
}

export default Landing;