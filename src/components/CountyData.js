import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
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
        })
        .catch((error) => {
            console.log('ERROR', error);
        })
    }

    displayCounties() {
        
        const display = this.state.data.map((c, idx) => {
            return (
                <CountyOptions
                    key ={idx}
                    name ={c}
                />
            );
        })

        return display;
    }

    handleChange = (event) => {
        this.setState ({
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
             this.state.countyInfo.caseDensity = response.data.countyInfo.caseDensity;
             this.state.countyInfo.cases = response.data.countyInfo.cases;
             this.state.countyInfo.deaths = response.data.countyInfo.deaths;
             this.state.countyInfo.newCases = response.data.countyInfo.newCases;
             this.state.countyInfo.newDeaths = response.data.countyInfo.newDeaths;
             this.state.countyInfo.population = response.data.countyInfo.population;
             this.state.countyInfo.vaccinationsCompleted = response.data.countyInfo.vaccinationsCompleted;
             this.state.countyInfo.vaccinationsInitiated = response.data.countyInfo.vaccinationsInitiated;
            
             this.setState({
                county: this.state.county,
                countyInfo: {
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
                console.log('===> Error on login', error);
            });
      };


    render() {
        return (
            <div>

                <h1>Select a County</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <select onChange={this.handleChange} name="county" defaultValue={""}>
                        <option  value="test" >Type County Here</option>
                        {this.displayCounties()}
                    </select>
                    <br/>
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                </form>
                <br/>
                <br/>
                <table > 
                    <tr>
                        <th>County Data</th>
                    </tr>
                    <tr>
                        <td>Case Density</td>
                        <td>{this.state.countyInfo.caseDensity}</td>
                    </tr>
                    <tr>
                        <td>Cases</td>
                        <td>{this.state.countyInfo.cases}</td>
                    </tr>
                    <tr>
                        <td>Deaths</td>
                        <td>{this.state.countyInfo.deaths}</td>
                    </tr>
                    <tr>
                        <td>New Cases</td>
                        <td>{this.state.countyInfo.newCases}</td>
                    </tr>
                    <tr>
                        <td>New Deaths</td>
                        <td>{this.state.countyInfo.newDeaths}</td>
                    </tr>
                    <tr>
                        <td>Population</td>
                        <td>{this.state.countyInfo.population}</td>
                    </tr>
                    <tr>
                        <td>Vaccinations Completed</td>
                        <td>{this.state.countyInfo.vaccinationsCompleted}</td>
                    </tr>
                    <tr>
                        <td>Vaccinations Initiated</td>
                        <td>{this.state.countyInfo.vaccinationsInitiated}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default CountyData;