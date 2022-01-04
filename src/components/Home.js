import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';


class Home extends Component {

    render() {
        return (
            <div>
                {<NavigationBar />}

                <h1>Welcome to the wonder beautiful Home Page</h1>
                <iframe src="https://covidactnow.org/embed/us/" title="CoVid Act Now" width="700" height="770" frameBorder="0" scrolling="no"></iframe>
            </div>
        );
    }
}

export default Home;