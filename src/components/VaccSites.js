import React, { Component } from 'react';
import SiteResult from './SiteResult';
import './VaccSites.css';
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

        axios.get(`${REACT_APP_SERVER_URL}/site/zip/${this.state.zipCode}`)
            .then((response) => {
                if (response.data.zipArr !== undefined) {
                    // console.log('DATA', response.data.zipArr == undefined);
                    this.setState({
                        data: response.data.zipArr,
                        secondaryData: response.data.closeByArr
                    })
                }
                else {
                    return alert("no sites available for this zipcode");
                }
                // console.log('WHAOAOHAOHOAH', this.state.data);
            })
            .catch(error => {
                console.log('error gettin zippy', error);
            })
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
            <div className="vacc-sites-container">
                <div>
                    <form action="/addsite" method="GET">
                        <button className="add-site-button">
                            Click Here to Add a Vaccination Site
                        </button>
                    </form>
                </div>
                <div className="site-search-form">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input className='site-search-field'
                            placeholder="Search by Zip Code"
                            value={this.state.zipCode}
                            onChange={this.handleZipCode.bind(this)}
                        />
                    </form>
                </div>
                <div className='site-results-container'>
                    {this.displaySiteSearch()}
                    {this.displaySecondarySites()}
                </div>
            </div>
        );
    }
}

export default VaccSites;

//make the results be its own route or figure out a diff way to keep state when user hits back button on browser