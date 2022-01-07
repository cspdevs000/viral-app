import React, { Component } from 'react';
import './TopTen.css';

class TopTenNewCases extends Component {
    render() {
        return (
            <div className='list-container'>
                <ol>
                    <li>{this.props.state}: {this.props.newCases}</li>
                </ol>
            </div>
        );
    }
}

export default TopTenNewCases;