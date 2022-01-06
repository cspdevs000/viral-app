import React, { Component } from 'react';
import TopTen from './TopTen';
import TopTenNewCases from './TopTenNewCases';
import TopTenDeaths from './TopTenDeaths';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
import axios from 'axios';


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
        axios.get('http://localhost:3000/actNow')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    cases: response.data.topTenCasesArr,
                    deaths: response.data.topTenDeathsArr,
                    newCases: response.data.topTenNewCasesArr
                })
                console.log('this.state', this.state);
                console.log('this.state.data', this.state.data);
            })
            .catch((error) => {
                console.log('error ERROR error', error)
            })
    }

    displayTopTenCases() {
        const display = this.state.cases.map((s, idx) => {
            return <TopTen key={idx} state={s.state} cases={s.cases} />
        });
        return display;
    }

    displayTopTenDeaths() {
        const display = this.state.deaths.map((s, idx) => {
            return <TopTenDeaths key={idx} state={s.state} deaths={s.cases} />
        });
        return display;
    }

    displayTopTenNewCases() {
        const display = this.state.newCases.map((s, idx) => {
            return <TopTenNewCases key={idx} state={s.state} newCases={s.cases} />
        });
        return display;
    }

    render() {
        return (
            <div>

                <div>
                    <h1>Home Page</h1>
                    <iframe src="https://covidactnow.org/embed/us/" title="CoVid Act Now" width="700" height="680" frameBorder="0" scrolling="no"></iframe>
                </div>

                <div>
                    <h1>Top Ten Covid Cases No.</h1>
                    {this.displayTopTenCases()}<br />
                    <h1>Top Ten Covid Deaths</h1>
                    {this.displayTopTenDeaths()}<br />
                    <h1>Top Ten New Covid Cases</h1>
                    {this.displayTopTenNewCases()}<br />
                </div>
            </div>
        );
    }
}



export default Home;

// class Home extends Component {
//     constructor(props) {
//         super(props);
//                 this.state = {
//             data: []
//         };
//     }

//     componentDidMount() {
//         axios.get('http://localhost:3000/actNow')
//             .then((response) => {
//                 console.log(response.data);
//                 this.setState({
//                     cases: response.data.topTenCasesArr,
//                     deaths: response.data.topTenDeathsArr,
//                     newCases: response.data.topTenNewCasesArr
//                 })
//             })
//             .catch((error) => {
//                 console.log('error ERROR error', error)
//             })
//     }

//     displayTopTenCases() {
//         const display = this.state.cases.map((s, idx) => {
//             return <TopTen key={idx} state={s.state} cases={s.cases} />
//         });
//         return display;
//     }

//     displayTopTenDeaths() {
//         const display = this.state.deaths.map((s, idx) => {
//             return <TopTenDeaths key={idx} state={s.state} deaths={s.cases} />
//         });
//         return display;
//     }

//     displayTopTenNewCases() {
//         const display = this.state.newCases.map((s, idx) => {
//             return <TopTenNewCases key={idx} state={s.state} newCases={s.cases} />
//         });
//         return display;
//     }

//     render() {
//         return (
//             <div>

//                 <div>
//                     <h1>Home Page</h1>
//                     <iframe src="https://covidactnow.org/embed/us/" title="CoVid Act Now" width="700" height="680" frameBorder="0" scrolling="no"></iframe>
//                 </div>

//                 <div>
//                     <h1>Top Ten Covid Cases</h1>
//                     {this.displayTopTenCases()}
//                     <h1>Top Ten Covid Deaths</h1>
//                     {this.displayTopTenDeaths()}
//                     <h1>Top Ten New Covid Cases</h1>
//                     {this.displayTopTenNewCases()}
//                 </div>
//             </div>
//         );
//     }
// }