import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import './AddVaccSite.css';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;


class AddVaccSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            waitTimes: "choiceA",
            redirect: false,
        };
    }

    handleName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    handleAddress(e) {
        this.setState({
            address: e.target.value,
        });
    }

    handleCity(e) {
        this.setState({
            city: e.target.value,
        });
    }

    handleState(e) {
        this.setState({
            state: e.target.value,
        });
    }

    handleZipCode(e) {
        this.setState({
            zipCode: e.target.value,
        });
    }

    handleWaitTimes(e) {
        this.setState({
            waitTimes: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newSite = {
            id: this.state.id,
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            waitTimes: this.state.waitTimes,
        };
        axios
            .post(`${REACT_APP_SERVER_URL}/site/new`, newSite)
            .then((response) => {
                // console.log(response.data)
                // console.log(response.data.newSite[0]._id)
                this.setState({
                    id: response.data.newSite[0]._id
                });
                window.location.href = `/site/${this.state.id}`;
                return alert('Vaccination Site Created');
            })
            .catch((error) => console.log("===> Error in Creating Vacc Site", error));
    };

    render() {
        // if (this.state.redirect) return <Navigate to="/site/${this.props.id}" />;

        return (
            <div className='add-vacc-site-container'>
                <div>
                    <h1>Add a Vaccination Site</h1>
                </div>
                <div className='content'>
                    <table>
                        <tr>
                            <td>Name of Location:
                                <br />
                                <br />
                                <input
                                    type="text"
                                    placeholder="Type Here"
                                    autoComplete="name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleName.bind(this)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Address:
                                <br />
                                <br />
                                <input
                                    type="text"
                                    placeholder="Type Here"
                                    autoComplete="address"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.handleAddress.bind(this)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>City:
                                <br />
                                <br />
                                <input
                                    type="text"
                                    placeholder="Type Here"
                                    autoComplete="city"
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.handleCity.bind(this)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>State:
                                <br />
                                <br />
                                <input
                                    type="text"
                                    placeholder="Type Here"
                                    autoComplete="state"
                                    name="state"
                                    value={this.state.state}
                                    onChange={this.handleState.bind(this)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Zip Code:
                                <br />
                                <br />
                                <input
                                    type="text"
                                    placeholder="Type Here"
                                    autoComplete="zipcode"
                                    name="zipCode"
                                    value={this.state.zipCode}
                                    onChange={this.handleZipCode.bind(this)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="waitTimes">How long did you wait?</label>
                                <br />
                                <br />
                                <select
                                    name="waitTimes"
                                    onChange={this.handleWaitTimes.bind(this)}
                                    defaultValue={""}>
                                    <option value="choiceA">less than 30 minutes</option>
                                    <option value="choiceB">30 minutes - 1 hour</option>
                                    <option value="choiceC">1-2 hours</option>
                                    <option value="choiceD">more than 2 hours</option>
                                </select>
                            </td>
                        </tr>
                        <br />
                        <div>
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <button type="submit">Submit</button>
                            </form>
                        </div>

                    </table>
                </div>
            </div>
        );
    }
}

export default AddVaccSite;