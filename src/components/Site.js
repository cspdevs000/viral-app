import React, { Component } from 'react';
import IndividualSite from './IndividualSite'
import './Site.css';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

let temp = window.location.pathname.split('/')
let trackerId = temp[2];

class Site extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            typWaitTime: '',
        };
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/site/${trackerId}`)
        .then((response) => {
            this.setState({
                data: response.data.site,
                typWaitTime: response.data.popularWaitTime
            })
        })
        .catch(error => {
            console.log('error gettin zippy', error);
        });
    };

    displayIndividualSite() {
        const display = this.state.data.map((s, idx) => {
            return <IndividualSite key={idx} user={this.props.user} id={s._id}  phoneNumber={s.phoneNumber} name={s.name} zipCode={s.zipCode} city={s.city} state={s.state} address={s.address} typWaitTime={this.state.typWaitTime} />
        });
        return display;
      }
  
    render() {
      return (
          <div title="site-display" className='site-container'>
              {this.displayIndividualSite()}
          </div>
      );
    }
  }

  export default Site;