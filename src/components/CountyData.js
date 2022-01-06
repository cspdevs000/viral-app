import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
import axios from 'axios';
import CountyOptions from './CountyOptions';

class CountyData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            county: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/countyData/counties')
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
        console.log(this.state.county)
        axios.post(`http://localhost:3000/actNow/county`, userData)
            .then(response => {
             console.log('Response Data', response.data);
            })
            .catch(error => {
                console.log('===> Error on login', error);
            });
      };


    render() {
        return (
            <div>

                <h1>Select a County</h1>

                {/* <form method = "GET" action="http://localhost:3000/actNow/">
                    <select name="county" defaultValue={""}>
                        <option value="" >-----</option>
                        {this.displayCounties()}
                    </select>
                    <br/>
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                </form> */}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <select onChange={this.handleChange} name="county" defaultValue={""}>
                        <option  value="test" >-----</option>
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
                        <td>Infection Rate</td>
                        <td>120 people</td>
                    </tr>
                    <tr>
                        <td>Vaccination Rate</td>
                        <td>75%</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default CountyData;

//TODO this - ref: justin