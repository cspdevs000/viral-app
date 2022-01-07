import React, { Component } from 'react';
import SiteResult from './SiteResult';
import './NavigationBar.css';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

class VaccSites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            data: [],
            secondaryData: [],
            zipCode: ""
        };
    }
    
    handleZipCode(e) {
        this.setState({
            zipCode: e.target.value,
        });
      }

    handleSubmit = (e) => {
        e.preventDefault(); 
        const zipCode = { 
            zipCode: this.state.zipCode
        };
        console.log('queery', this.state.zipCode);
        
        axios.get(`${REACT_APP_SERVER_URL}/site/zip/${this.state.zipCode}`)
        .then((response) => {
            console.log(response.data);
            this.setState({
                data: response.data.zipArr,
                secondaryData: response.data.closeByArr
            })
            console.log('WHAOAOHAOHOAH', this.state.data);
        })
        .catch(error => {
            console.log('error gettin zippy', error);
        });
    };
    
    displaySiteSearch() {
        const display = this.state.data.map((s, idx) => {
            return <SiteResult key={idx} id={s._id} name={s.name} zipCode={s.zipCode} city={s.city} />
        });
        return display;
    }

    displaySecondarySites() {
        const display = this.state.secondaryData.map((s, idx) => {
            return <SiteResult key={idx} id={s._id} name={s.name} zipCode={s.zipCode} city={s.city} />
        });
        return display;
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Future Vaccination Sites Search Page</h1>
                </div>
                <div>
                    <form action="/addsite" method="GET">
                        <button>
                            Add a Vaccination Site
                        </button>
                    </form>
                </div>
                <div className="searchForm">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input
                            placeholder="Search for..."
                            value={this.state.zipCode}
                            onChange={this.handleZipCode.bind(this)}
                        />
                    </form>
                </div>
                <div>
                    {this.displaySiteSearch()}
                </div>
                <div>
                    {this.displaySecondarySites()}
                </div>
            </div>
        );
    }
}

export default VaccSites;

//make the results be its own route or figure out a diff way to keep state when user hits back button on browser