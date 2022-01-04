import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to Viral</h1>
                <h2>(home page works)</h2>
                <div>
                <a href="/login">
                    <span>Login</span>
                </a>
                <br></br>
                <a href="/signup">
                    <span>Signup</span>
                </a>
                </div>
            </div>
        );
    }
}

export default Home;