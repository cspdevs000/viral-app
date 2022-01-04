import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
// import VaccSiteResult from './VaccSiteResult'

class VaccSites extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {<NavigationBar />}
                
                <h1>Future Vaccination Sites Search Page</h1>
            </div>
            //need search by zip
        );
    }
}

export default VaccSites;