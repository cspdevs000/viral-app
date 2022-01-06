import React, { Component } from 'react';

class SiteSearch extends Component {
  
    render() {
      return (
          <div>
              <p>{this.name}</p>
              <p>{this.zipCode}</p>
              <p>{this.city}</p>
          </div>
      );
    }
  }

  export default SiteSearch;