import React, { Component } from 'react';

class CountyOptions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <option value={this.props.name} >{this.props.name}</option>
        )
    }

}

export default CountyOptions;