import React, { Component } from 'react';


class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <section className="hero is-medium">
                <div className="hero-head">
                    <div className="container">
                        <nav className="navbar" role="navigation" aria-label="main navigation">

                            <div id="navbarBasicExample" class="navbar-menu">
                                <div class="navbar-start">
                                    {!this.props.user && <a class="navbar-item is-active" href="/signup" >Signup </a>}
                                    {!this.props.user && <a class="navbar-item" href="/login" >Login </a>}
                                    {this.props.user && <a class="navbar-item is-active" onClick={this.props.handleLogout} href="/login" >Logout</a>}
                                    <a class="navbar-item" href="/profile" >Profile </a>
                                    <a class="navbar-item" href="/countydata" >County Data </a>
                                    <a class="navbar-item" href="/sites" >Sites </a>
                                    <a class="navbar-item" href="/home" >Home </a>
                                    
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