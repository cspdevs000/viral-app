import React, { Component } from 'react';
import TopTen from './TopTen';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
import axios from 'axios';


class Home extends Component {
    constructor(props) {
        super(props);
                this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/actNow')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data.topTenDataArr
                })
            })
            .catch((error) => {
                console.log('error ERROR error', error)
            })
    }

    // displayTopTen() {
    //     const display = this.state.data.map((s, idx) => {
    //         return <TopTen key={idx} state={s.state} cases={s.cases} />
    //     });
    //     return display;
    // }

    render() {
        return (
            <div>

                <div>
                    <h1>Home Page</h1>
                    <iframe src="https://covidactnow.org/embed/us/" title="CoVid Act Now" width="700" height="680" frameBorder="0" scrolling="no"></iframe>
                </div>

                <div>
                    <h1>Top Ten Covide States</h1>
                    {/* {this.displayTopTen()} */}
                </div>
            </div>
        );
    }
}



export default Home;