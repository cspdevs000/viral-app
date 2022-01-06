import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import './NavigationBar.css';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            redirect: false,
        };
    }

    handleName(e) {
        this.setState({
            name: e.target.value,
        });
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

    handleConfirmPassword(e) {
        this.setState({
            confirmPassword: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        // make sure password and confirm password are equal
        // password length >= 8 characters
        if (this.state.password === this.state.confirmPassword && this.state.password.length >= 8) {
            const newUser = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            };
            axios
                .post(`${REACT_APP_SERVER_URL}/users/signup`, newUser)
                .then((response) => {
                    this.setState({
                        redirect: true,
                    });
                    return alert('Account Created');
                })
                .catch((error) => console.log("===> Error in Signup", error));
        } else {
            if (this.state.password !== this.state.confirmPassword)
                return alert("Passwords don't match");
            alert("Password needs to be at least 8 characters. Please try again.");
        }
    };

    render() {
        if (this.state.redirect) return <Navigate to="/login" />;

        return (
            <div>

                <h1>Signup Page</h1>
                <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="field">
                            <div className="control">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleEmail.bind(this)}
                                    required
                                />
                            </div>
                        </div>
                        <label>
                            <p>Username</p>
                            <input type="text" name="userName" />
                        </label>
                        <div className="field">
                            <div className="control">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handlePassword.bind(this)}
                                    required
                                />
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        autoComplete="password"
                                        name="confirmPassword"
                                        value={this.state.confirmPassword}
                                        onChange={this.handleConfirmPassword.bind(this)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    autoComplete="name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleName.bind(this)}
                                    required
                                />
                            </div>
                        </div>
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