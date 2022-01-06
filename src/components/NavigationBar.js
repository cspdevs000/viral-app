import React, { Component } from 'react';


class NavigationBar extends Component {

    render() {
        return (
            <section className="hero is-medium">
                <div className="hero-head">
                    <div className="container">
                        <nav className="navbar" role="navigation" aria-label="main navigation">

                            <div id="navbarBasicExample" className="navbar-menu">
                                <div className="navbar-start">
                                    <a className="navbar-item is-active" href="/signup" >Signup </a>
                                    <a className="navbar-item" href="/login" >Login </a>
                                    <a className="navbar-item" href="/profile" >Profile </a>
                                    <a className="navbar-item" href="/countydata" >County Data </a>
                                    <a className="navbar-item" href="/sites" >Sites </a>
                                    <a className="navbar-item" href="/home" >Home </a>
                                    <a onClick={this.props.handleLogout} href="/login" >Logout</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
        );
    }
}

export default NavigationBar;