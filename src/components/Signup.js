import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import './Signup.css';
import axios from 'axios';
import CountyOptions from './CountyOptions';
const { REACT_APP_SERVER_URL } = process.env;

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            userName: "",
            password: "",
            confirmPassword: "",
            state: "",
            redirect: false,
            data: []
        };
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/countyData/counties`)
            .then((response) => {
                this.setState({
                    data: response.data.countyNameArr
                });
            })
            .catch((error) => {
                console.log('ERROR', error);
            })
    }

    validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

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

    handleUserName(e) {
        this.setState({
            userName: e.target.value,
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

    handleState(e) {
        this.setState({
            state: e.target.value,
        });
    }

    handleCounty(e) {
        this.setState({
            county: e.target.value,
        });
    }

    displayCounties() {

        const display = this.state.data.map((c, idx) => {
            return (
                <CountyOptions
                    key={idx}
                    name={c}
                />
            )
        })

        return display;
    }

    handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        // make sure password and confirm password are equal
        // password length >= 8 characters
        if (this.state.password === this.state.confirmPassword && this.state.password.length >= 8) {
            if (this.validateEmail(this.state.email) == null) {
                alert('email is not valid');
            }
            else {

                const newUser = {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    state: this.state.state,
                    county: this.state.county
                };
                axios
                    .post(`${REACT_APP_SERVER_URL}/users/signup`, newUser)
                    .then((response) => {
                        console.log(response.data);
                        this.setState({
                            redirect: true,
                        });
                        return alert('Account Created');
                    })
                    .catch((error) => {
                        console.log("===> Error in Signup", error);
                        alert('Error signing up, User email may already exist')
                    });
            }
        } else {
            if (this.state.password !== this.state.confirmPassword)
                return alert("Passwords don't match");
            alert("Password needs to be at least 8 characters. Please try again.");
        }
    };

    render() {
        if (this.state.redirect) return <Navigate to="/login" />;

        return (
            <div className="signup-container">
                <div className="form-container">
                    <h1>Sign up for Viral</h1>
                    <h4>keep track of the latest covid data & your vaccine card</h4>
                    <div className="signup-card">
                        <div className='content grid'>
                            <table className="left">
                                <tr>
                                    <td><h4>Email: </h4>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input"
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
                                    </td>
                                </tr>
                                <tr>
                                    <td><h4>Name: </h4>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input"
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
                                    </td>
                                </tr>
                                <tr>
                                    <td><h4>Username: </h4>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input"
                                                    type="text"
                                                    placeholder="Username"
                                                    autoComplete="username"
                                                    name="userName"
                                                    value={this.state.userName}
                                                    onChange={this.handleUserName.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <table className="right">
                                <tr>
                                    <td><h4>Password: </h4>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input"
                                                    type="password"
                                                    placeholder="Password"
                                                    autoComplete="password"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.handlePassword.bind(this)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><h4>Confirm Password: </h4>
                                        <div className="field">
                                            <div className="control">
                                                <input
                                                    className="input"
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
                                    </td>
                                </tr>


                                {/* <div className="field">
                                            <div className="control">
                                                <select 
                                                    onChange={this.handleState.bind(this)} 
                                                    name="state" 
                                                    defaultValue={""}>
                                                    <option value="test" >Select State</option>
                                                    <option value="AL" >Alabama</option>
                                                    <option value="AK" >Alaska</option>
                                                    <option value="AZ" >Arizona</option>
                                                    <option value="AR" >Arkansas</option>
                                                    <option value="CA" >California</option>
                                                    <option value="CO" >Colorado</option>
                                                    <option value="CT" >Connecticut</option>
                                                    <option value="DE" >Delaware</option>
                                                    <option value="FL" >Florida</option>
                                                    <option value="GA" >Georgia</option>
                                                    <option value="HI" >Hawaii</option>
                                                    <option value="ID" >Idaho</option>
                                                    <option value="IL" >Illinois</option>
                                                    <option value="IN" >Indiana</option>
                                                    <option value="IA" >Iowa</option>
                                                    <option value="KS" >Kansas</option>
                                                    <option value="KY" >Kentucky</option>
                                                    <option value="LA" >Louisiana</option>
                                                    <option value="ME" >Maine</option>
                                                    <option value="MD" >Maryland</option>
                                                    <option value="MA" >Massachusetts</option>
                                                    <option value="MI" >Michigan</option>
                                                    <option value="MN" >Minnesota</option>
                                                    <option value="MS" >Mississippi</option>
                                                    <option value="MO" >Missouri</option>
                                                    <option value="MT" >Montana</option>
                                                    <option value="NE" >Nebraska</option>
                                                    <option value="NV" >Nevada</option>
                                                    <option value="NH" >New Hampshire</option>
                                                    <option value="NJ" >New Jersey</option>
                                                    <option value="NM" >New Mexico</option>
                                                    <option value="NY" >New York</option>
                                                    <option value="NC" >North Carolina</option>
                                                    <option value="ND" >North Dakota</option>
                                                    <option value="OH" >Ohio</option>
                                                    <option value="OK" >Oklahoma</option>
                                                    <option value="OR" >Oregon</option>
                                                    <option value="PA" >Pennsylvania</option>
                                                    <option value="RI" >Rhode Island</option>
                                                    <option value="SC" >South Carolina</option>
                                                    <option value="SD" >South Dakota</option>
                                                    <option value="TN" >Tennessee</option>
                                                    <option value="TX" >Texas</option>
                                                    <option value="UT" >Utah</option>
                                                    <option value="VT" >Vermont</option>
                                                    <option value="VA" >Virginia</option>
                                                    <option value="WA" >Washington</option>
                                                    <option value="WV" >West Virginia</option>
                                                    <option value="WI" >Wisconsin</option>
                                                    <option value="WY" >Wyoming</option>
                                                </select>
                                            </div>
                                        </div> */}

                                <tr>
                                    <td><h4>County: </h4>
                                        <div className="field">
                                            <div className="control">
                                                <input type="text" id="search" className="dropdown" onChange={this.handleChange} name="county" list="theData" placeholder="type county here"></input>
                                                <datalist id="theData" className="dropdown" name="dataList" defaultValue={""}>
                                                    <option value="test" ></option>
                                                    {this.displayCounties()}
                                                </datalist>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <br />
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div>
                                <button className="signup-submit" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;

//TODO REDIRECT TO HOMEPAGE