import React, { Component } from 'react';
import './NavigationBar.css';


class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
                    <div className="navbarContainer">
                        {/* <nav className="navbar" role="navigation"> */}
                            <div className="is-left">
                                    {!this.props.user && <a className="navbar-item" href="/signup" >Signup </a>}
                                    {!this.props.user && <a className="navbar-item" href="/login" >Login </a>}
                                    {this.props.user && <a className="navbar-item" onClick={this.props.handleLogout} href="/login" >Logout</a>}
                            </div>
                                    <a className="navbar-item" href="/profile" >Profile </a>
                                    <a className="navbar-item" href="/countydata" >County Data </a>
                                    <a className="navbar-item" href="/sites" >Sites </a>
                                    <a className="navbar-item" href="/home" >Home </a>
                        {/* </nav> */}
                    </div>

        );
    }
}

export default NavigationBar;