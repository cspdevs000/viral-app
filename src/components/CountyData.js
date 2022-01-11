import React, { Component } from 'react';
import './CountyData.css';
import axios from 'axios';
import CountyOptions from './CountyOptions';
const { REACT_APP_SERVER_URL } = process.env;


class CountyData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            county: '',
            countyInfo: {
                name: '',
                caseDensity: '',
                cases: '',
                deaths: '',
                newCases: '',
                newDeaths: '',
                population: '',
                vaccinationsCompleted: '',
                vaccinationsInitiated: '',
            }
        };
    }




    componentDidMount() {

        axios.get(`${REACT_APP_SERVER_URL}/countyData/counties`)
            .then((response) => {
                this.setState({
                    data: response.data.countyNameArr
                });
                console.log('Test', this.props.user.email);
                console.log('Test', this.props.user.county);
                console.log('Test', this.props.user.state);
                if(this.props.county !== null){
                    const userData = {
                        county: this.props.user.county
                    };
                    axios.post(`${REACT_APP_SERVER_URL}/actNow/county`, userData)
                        .then(response => {
                            console.log(response.data.countyInfo)
                            this.setState({
                                countyInfo: {
                                    name: response.data.countyInfo.county,
                                    caseDensity: response.data.countyInfo.caseDensity,
                                    cases: response.data.countyInfo.cases,
                                    deaths: response.data.countyInfo.deaths,
                                    newCases: response.data.countyInfo.newCases,
                                    newDeaths: response.data.countyInfo.newDeaths,
                                    population: response.data.countyInfo.population,
                                    vaccinationsCompleted: response.data.countyInfo.vaccinationsCompleted,
                                    vaccinationsInitiated: response.data.countyInfo.vaccinationsInitiated,
                                }
                            });

                            this.setState({
                                county: this.state.county,
                                countyInfo: {
                                    name: this.state.countyInfo.name,
                                    caseDensity: this.state.countyInfo.caseDensity,
                                    cases: this.state.countyInfo.cases,
                                    deaths: this.state.countyInfo.deaths,
                                    newCases: this.state.countyInfo.newCases,
                                    newDeaths: this.state.countyInfo.newDeaths,
                                    population: this.state.countyInfo.population,
                                    vaccinationsCompleted: this.state.countyInfo.vaccinationsCompleted,
                                    vaccinationsInitiated: this.state.countyInfo.vaccinationsInitiated,
                                }
                            })
                        })
                        .catch(error => {
                            console.log('===> ERROR GETTING DATA', error);
                        });
                }
            })
            .catch((error) => {
                console.log('ERROR', error);
            })

    }

    displayCounties() {

        const display = this.state.data.map((c, idx) => {
            return (
                <CountyOptions
                    key={idx}
                    name={c}
                />
            )
        })

        return display;
    }

    handleChange = (event) => {
        this.setState({
            county: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        const userData = {
            county: this.state.county
        };

        axios.post(`${REACT_APP_SERVER_URL}/actNow/county`, userData)
            .then(response => {
                console.log(response.data.countyInfo)
                this.setState({
                    countyInfo: {
                        name: response.data.countyInfo.county,
                        caseDensity: response.data.countyInfo.caseDensity,
                        cases: response.data.countyInfo.cases,
                        deaths: response.data.countyInfo.deaths,
                        newCases: response.data.countyInfo.newCases,
                        newDeaths: response.data.countyInfo.newDeaths,
                        population: response.data.countyInfo.population,
                        vaccinationsCompleted: response.data.countyInfo.vaccinationsCompleted,
                        vaccinationsInitiated: response.data.countyInfo.vaccinationsInitiated,
                    }
                });

                this.setState({
                    county: this.state.county,
                    countyInfo: {
                        name: this.state.countyInfo.name,
                        caseDensity: this.state.countyInfo.caseDensity,
                        cases: this.state.countyInfo.cases,
                        deaths: this.state.countyInfo.deaths,
                        newCases: this.state.countyInfo.newCases,
                        newDeaths: this.state.countyInfo.newDeaths,
                        population: this.state.countyInfo.population,
                        vaccinationsCompleted: this.state.countyInfo.vaccinationsCompleted,
                        vaccinationsInitiated: this.state.countyInfo.vaccinationsInitiated,
                    }
                })
            })
            .catch(error => {
                console.log('===> ERROR GETTING DATA', error);
            });
    };


    render() {
        return (
            <div className="county-page">
                <div className="county-container">
                    <div className="form-container">
                        <h1>Select a County</h1>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <select className="dropdown" onChange={this.handleChange} name="county" defaultValue={""}>
                                <option value="test" >Type County Here</option>
                                {this.displayCounties()}
                            </select>
                            
                            <button type="submit" className="county-submit">Submit</button>

                        </form>
                    </div>
                    <h1>{this.state.countyInfo.name}</h1>
                    <div className="table-container">
                        <table className="countyTable">
                            <tr>
                                <th className="countyTH">County Data</th>
                                <th className="countyTH">#</th>
                            </tr>
                            <tr>
                                <td className="countyTD">Case Density</td>
                                <td className="countyTD">{this.state.countyInfo.caseDensity} Cases per 100k People</td>
                            </tr>
                            <tr>
                                <td className="countyTD">Total Cases</td>
                                <td className="countyTD">{this.state.countyInfo.cases} Cases</td>
                            </tr>
                            <tr>
                                <td className="countyTD">Total Deaths</td>
                                <td className="countyTD">{this.state.countyInfo.deaths} Deaths</td>
                            </tr>
                            <tr>
                                <td className="countyTD">New Cases Today</td>
                                <td className="countyTD">{this.state.countyInfo.newCases} Cases</td>
                            </tr>
                            <tr>
                                <td className="countyTD">New Deaths Today</td>
                                <td className="countyTD">{this.state.countyInfo.newDeaths} Deaths</td>
                            </tr>
                            <tr>
                                <td className="countyTD">Population</td>
                                <td className="countyTD">{this.state.countyInfo.population} People</td>
                            </tr>
                            <tr>
                                <td className="countyTD">Vaccinations Completed</td>
                                <td className="countyTD">{this.state.countyInfo.vaccinationsCompleted} Vaccinations</td>
                            </tr>
                            <tr>
                                <td className="countyTD">Vaccinations Initiated</td>
                                <td className="countyTD">{this.state.countyInfo.vaccinationsInitiated} Vaccinations</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountyData;