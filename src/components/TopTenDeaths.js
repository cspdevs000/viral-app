import React, { Component } from 'react';

class TopTenDeaths extends Component {

    //are the 'cases' in the data new cases or total cases

    render() {
        return (
            <div>
            <h2>{this.props.state}: {this.props.deaths}</h2>
            </div>
        );
    }
}

export default TopTenDeaths;