import React, { Component } from 'react';

class TopTenNewCases extends Component {

    //are the 'cases' in the data new cases or total cases

    render() {
        return (
            <div>
            <h2>{this.props.state}: {this.props.newCases}</h2>
            </div>
        );
    }
}

export default TopTenNewCases;