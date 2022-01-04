import React, { Component } from 'react';


class NavigationBar extends Component {

    render() {
        return (
            <section class="hero is-medium">
                <div class="hero-head">
                    <div class="container">
                        <nav class="navbar" role="navigation" aria-label="main navigation">

                            <div id="navbarBasicExample" class="navbar-menu">
                                <div class="navbar-start">
                                    <a class="navbar-item is-active" href="/signup" >Signup </a>
                                    <a class="navbar-item" href="/login" >Login </a>
                                    <a class="navbar-item" href="/" >Landing </a>
                                    <a class="navbar-item" href="/dashboard" >Dashboard </a>
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