import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
import axios from 'axios';
import CountyOptions from './CountyOptions';
let countyList = []

// axios.get('https://localhost:3000/countyData/counties')
// .then(response => {
//     console.log('Counties', response.data);
//     countyList = response.data;
// })
// .catch(error => {
//     console.log(error);
// });

// const countyDropdown = countyList.map((c, idx) => {
//     return (
//         <CountyOptions
//             key ={idx}
//             name ={c.countyName}
//         />
//     );
// })

class CountyData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            county:"Alameda_County,_California"
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/countyData/counties')
        .then((response) => {
            //console.log('County response', response.data.countyNameArr);
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
            console.log('County',c);
            return (
                <CountyOptions
                    key ={idx}
                    name ={c}
                />
            );
        })

        return display;
    }


    render() {
        return (
            <div>
                {<NavigationBar />}

                <h1>Select a County</h1>

                <form method = "POST" action="http://localhost:3000/actNow/county" >
                    <select name="county" defaultValue={""}>
                        <option value="" >-----</option>
                        {this.displayCounties()}
                    </select>
                    <br/>
                    <div>
                        <button type="submit">Submit</button>
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