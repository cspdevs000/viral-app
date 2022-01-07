import React, { Component } from 'react';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

class SiteResult extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault(); 
    
    axios.get(`${REACT_APP_SERVER_URL}/site/${this.props.id}`)
    .then((response) => {
        console.log('SITE TO BE NAVIGATED TO', response.data);
        this.setState({
        })
    })
    .catch(error => {
        console.log('error gettin zippy', error);
    });
};


    render() {
      return (
          <div>
              <p>{this.props.name}</p>
              <p>{this.props.zipCode}</p>
              <p>{this.props.city}</p>
              {/* <form action={`${REACT_APP_SERVER_URL}/site/${this.props.id}`}> */}
              <form action={`/site/${this.props.id}`}>
              <button type="submit">
                  more info on this site
              </button>
              </form>
          </div>
      );
    }
  }

  export default SiteResult;