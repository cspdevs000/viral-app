import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';

class CountyData extends Component {

    render() {
        return (
            <div>
                {<NavigationBar />}

                <h1>Future County Data Page</h1>
            </div>
            //need search by zip
        );
    }
}

export default CountyData;