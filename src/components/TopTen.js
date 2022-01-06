import React, { Component } from 'react';

class TopTen extends Component {

    //are the 'cases' in the data new cases or total cases

    render() {
        return (
            <div>
            <h2>{this.props.state}: {this.props.cases}</h2>
            </div>
        );
    }
}

export default TopTen;