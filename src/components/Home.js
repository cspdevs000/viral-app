import React, { Component } from 'react';
import TopTen from './TopTen';
import TopTenNewCases from './TopTenNewCases';
import TopTenDeaths from './TopTenDeaths';
import './Home.css';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cases: [],
            deaths: [],
            newCases: []
        };
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/actNow`)
            .then((response) => {
                // console.log(response.data);
                this.setState({
                    cases: response.data.topTenCasesArr,
                    deaths: response.data.topTenDeathsArr,
                    newCases: response.data.topTenNewCasesArr
                })
                // console.log('this.state', this.state);
                console.log('this.state.data', this.state.cases);
            })
            .catch((error) => {
                console.log('error ERROR error', error)
            })
    }

    
    displayTopTenCases() {
        const display = this.state.cases.map((s, idx) => {
            return <TopTen key={idx} order={idx} state={s.state} cases={s.cases} />
        });
        return display;
    }

    displayTopTenDeaths() {
        const display = this.state.deaths.map((s, idx) => {
            return <TopTenDeaths key={idx} order={idx} state={s.state} deaths={s.deaths} />
        });
        return display;
    }

    displayTopTenNewCases() {
        const display = this.state.newCases.map((s, idx) => {
            return <TopTenNewCases key={idx} order={idx} state={s.state} newCases={s.newCases} />
        });
        return display;
    }

    render() {
        return (
            <div className="home-container">
                <div className="map-container">
                    <iframe className="map" src="https://covidactnow.org/embed/us/" title="CoVid Act Now"></iframe>
                </div>
                <div className='top-ten-1'>
                    <h1>Top Ten Covid Cases No.</h1>
                    {this.displayTopTenCases()}<br />
                </div>
                <div className='top-ten-2'>
                    <h1>Top Ten Covid Deaths</h1>
                    {this.displayTopTenDeaths()}<br />
                </div>
                <div className='top-ten-3'>
                    <h1>Top Ten New Covid Cases</h1>
                    {this.displayTopTenNewCases()}<br />
                </div>
            </div>
        );
    }
}



export default Home;
