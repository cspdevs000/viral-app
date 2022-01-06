import React, { Component } from 'react';

class CountyOptions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <option value="" >{this.name}</option>
        )
    }

}

export default CountyOptions;