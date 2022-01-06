import React, { Component } from 'react';

class SiteSearch extends Component {
  
    render() {
      return (
          <div>
              <p>{this.props.name}</p>
              <p>{this.props.zipCode}</p>
              <p>{this.props.city}</p>
              <form action="/site/:id">
              <button>
                  visit this site
              </button>
              </form>
          </div>
      );
    }
  }

  export default SiteSearch;