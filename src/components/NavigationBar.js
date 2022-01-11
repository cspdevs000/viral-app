import React, { Component } from 'react';
import './NavigationBar.css';


class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbarContainer">
                <nav className="navbar" role="navigation">
                    <div className="navbar-login">
                        <div className="is-left">
                            {!this.props.user && <a className="navbar-item" href="/signup" >Signup </a>}
                            {!this.props.user && <a className="navbar-item" href="/login" >Login </a>}
                            {this.props.user && <a className="navbar-item" onClick={this.props.handleLogout} href="/login" >Logout</a>}
                        </div>
                        <span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
                        <div className="tabs is-right">
                            <ul className="navbar-list">
                                <li className="navbar-list-item"><a className="navbar-item" href="/home" >Home </a></li>
                                <li className="navbar-list-item"><a className="navbar-item" href="/countydata" >County Data </a></li>
                                <li className="navbar-list-item"><a className="navbar-item" href="/sites" >Sites </a></li>
                                <li className="navbar-list-item"><a className="navbar-item" href="/profile" >Profile </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

export default NavigationBar;