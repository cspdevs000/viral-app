import React, { Component } from 'react';
import axios from 'axios';
import './SiteResult.css';
const { REACT_APP_SERVER_URL } = process.env;

class SiteResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            typWaitTime: '', 
            phoneNumber: this.props.phoneNumber,
        };

    }

    componentDidMount() {
      
            if(this.props.popularWaitTime == "choiceA"){this.setState({typWaitTime: "Less than 30 Minutes" })};
            if(this.props.popularWaitTime == "choiceB"){this.setState({typWaitTime: "30 minutes - 1 hour" })};
            if(this.props.popularWaitTime == "choiceC"){this.setState({typWaitTime: "1-2 hours" })};
            if(this.props.popularWaitTime == "choiceD"){this.setState({typWaitTime: "More than 2 hours" })};
            if(this.props.phoneNumber == '' || this.props.phoneNumber == undefined){
                this.setState({phoneNumber: 'N/A'})
            }
    }
  
  handleSubmit = (e) => {
    e.preventDefault(); 
    
    axios.get(`${REACT_APP_SERVER_URL}/site/${this.props.id}`)
    .then((response) => {
        this.setState({
        })
    })
    .catch(error => {
        console.log('error gettin zippy', error);
    });
};


    render() {
      return (
          <div className='results-card'>
              <h1 className="search-result-siteName">{this.props.name}</h1>
              <p>{this.props.address}, {this.props.city}, {this.props.state}, {this.props.zipCode}</p>
              <p>Typical Wait Time: {this.state.typWaitTime}</p>
              <p>Phone Number: {this.state.phoneNumber}</p>
              {/* <form action={`${REACT_APP_SERVER_URL}/site/${this.props.id}`}> */}
              <form action={`/site/${this.props.id}`}>
              <button type="submit">
                  More Info
              </button>
              </form>
          </div>
      );
    }
  }

  export default SiteResult;