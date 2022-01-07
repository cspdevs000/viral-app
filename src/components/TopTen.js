import React, { Component } from 'react';
import './TopTen.css';

class TopTen extends Component {

    //are the 'cases' in the data new cases or total cases

    render() {
        return (
            <div className='list-container'>
                <ol>
                    <li>{this.props.order + 1}. {this.props.state}: {this.props.cases}</li>
                </ol>
            </div>
        );
    }
}

export default TopTen;