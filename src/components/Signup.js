import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';

class Signup extends Component {

    render() {
        return (
            <div>
                {<NavigationBar />}
                
                <h1>Signup Page</h1>
                <div>
                    <form action="http://localhost:3000/users/signup" method="POST">
                        <label>
                            <p>Email</p>
                            <input type="text" name="email" />
                        </label>
                        <label>
                            <p>Username</p>
                            <input type="text" name="userName" />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" name="password" />
                        </label>
                        <label>
                            <p>Name</p>
                            <input type="text" name="name" />
                        </label>
                        <label>
                            <p>State</p>
                            <input type="text" name="state" />
                        </label>
                        <label>
                            <p>County</p>
                            <input type="text" name="county" />
                        </label>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;

//TODO REDIRECT TO HOMEPAGE