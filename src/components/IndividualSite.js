import React, { Component } from 'react';

class IndividualSite extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.city}</p>
                <p>{this.props.state}</p>
                <p>{this.props.zipCode}</p>
                <p>{this.props.waitTimes}</p>
            </div>
        );
      }
    }

export default IndividualSite;