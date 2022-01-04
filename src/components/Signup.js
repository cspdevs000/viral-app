import React, { Component } from 'react';

class Signup extends Component {

    render() {
        return (
            <div>
                <h1>Signup Page</h1>
                <div>
                    <form onSubmit="">
                        <label>
                            <p>Email</p>
                            <input type="text" onChange="" />
                        </label>
                        <label>
                            <p>Username</p>
                            <input type="text" onChange="" />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" onChange="" />
                        </label>
                        <label>
                            <p>First Name</p>
                            <input type="text" onChange="" />
                        </label>
                        <label>
                            <p>Last Name</p>
                            <input type="text" onChange="" />
                        </label>
                        <label>
                            <p>State</p>
                            <input type="text" onChange="" />
                        </label>
                        <label>
                            <p>County</p>
                            <input type="text" onChange="" />
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