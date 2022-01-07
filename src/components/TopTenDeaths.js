import React, { Component } from 'react';
import './TopTen.css';

class TopTenDeaths extends Component {

    //are the 'cases' in the data new cases or total cases

    render() {
        return (
            <div className='list-container'>
                <ol>
                    <li>{this.props.state}: {this.props.deaths}</li>
                </ol>
            </div>
        );
    }
}

export default TopTenDeaths;