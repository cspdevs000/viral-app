import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
// import VaccSiteResult from './VaccSiteResult'

class VaccSites extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <div>
                <h1>Future Vaccination Sites Search Page</h1>
                </div>
                <div>
                <form action="/addsite" method="GET">
                <button>
                    Add a Vaccination Site
                </button>
                </form>    
                </div>
            </div>
        );
    }
}

export default VaccSites;