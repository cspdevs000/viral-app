import React, { Component } from 'react';
import SiteSearch from './SiteSearch';
import './NavigationBar.css';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;
// import VaccSiteResult from './VaccSiteResult'

class VaccSites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            data: [],
            filteredData: []
        };
    }

        componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/site`)
        .then((response) => {
            console.log(response.data);
            this.setState({
                data: response.data.siteArray
            })
        })
            // .then(data => {
            //     const { query } = this.state;
            //     const filteredData = this.state.data.filter(element => {
            //         return element.name.toLowerCase().includes(query.toLowerCase());
            //     });

            //     this.setState({
            //         data,
            //         filteredData
            //     });
            // });

    }
    
    displaySiteSearch() {
        const display = this.state.data.map((s, idx) => {
            return <SiteSearch key={idx} name={s.name} zipCode={s.zipCode} city={s.city} />
        });
        return display;
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const query = e.target.value;

        this.setState(prevState => {
            const filteredData = prevState.data.filter(element => {
                return element.name.toLowerCase().includes(query.toLowerCase());
            });

            return {
                query,
                filteredData
            };
        });
    };

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
                    <form>
                        <input
                            placeholder="Search for..."
                            value={this.state.query}
                            onChange={this.handleInputChange}
                        />
                    </form>
                </div>
                <div>
                    {this.displaySiteSearch()}
                </div>
            </div>
        );
    }
}

export default VaccSites;