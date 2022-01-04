import React, { Component } from 'react';

class Signup extends Component {

    render() {
        return (
            <div>
                <h1>Signup Page</h1>
                <div>
                    <form action="http://localhost:3000/users" method="POST">
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
                            <p>First Name</p>
                            <input type="text" name="firstName" />
                        </label>
                        <label>
                            <p>Last Name</p>
                            <input type="text" name="lastName" />
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