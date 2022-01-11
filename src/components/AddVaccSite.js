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
            phoneNumber: '',
            redirect: false,
        };
    }


    validatePhoneNumber = (phoneNumber) => {
        return String(phoneNumber)
            .toLowerCase()
            .match(
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            );
    };

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
    handlePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value,
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
        if (this.state.zipCode.length != 5 || isNaN(this.state.zipCode)) {
            alert("Please enter a 5 digit number for the zip code");
        }
        else if (this.state.phoneNumber != '' && this.validatePhoneNumber(this.state.phoneNumber) == null) {

            alert('Please enter the phone number in XXX-XXX-XXXX format');
        }
        else if(this.state.address == '' || this.state.address.length < 6){
           
            alert('Invalid address');
        }
        else {

            const newSite = {
                id: this.state.id,
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zipCode: this.state.zipCode,
                waitTimes: this.state.waitTimes,
                phoneNumber: this.state.phoneNumber
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
        }

    };

    render() {
        // if (this.state.redirect) return <Navigate to="/site/${this.props.id}" />;

        return (
            <div className='add-vacc-site-container'>
                <div>
                    <h1>Add a Vaccination Site</h1>
                </div>
                <div className="card">
                    <div className='content grid'>
                        <table className="left">
                            <tr>
                                <td><h4>Name of Location:</h4>

                                    <input
                                        className="input"
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
                                <td><h4>Address:</h4>
                                    <input
                                        className="input"
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
                                <td><h4>City:</h4>
                                    <input
                                        className="input"
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
                                <td><h4>Phone Number:</h4>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Type Here"
                                        autoComplete="Phone Number"
                                        name="phoneNumber"
                                        value={this.state.phoneNumber}
                                        onChange={this.handlePhoneNumber.bind(this)}
                                        required
                                    />
                                </td>
                            </tr>
                        </table>
                        <table className="right">
                            <tr>
                                <td><h4>State:</h4>
                                    {/* <input
                                        className="input"
                                        type="text"
                                        placeholder="Type Here"
                                        autoComplete="state"
                                        name="state"
                                        value={this.state.state}
                                        onChange={this.handleState.bind(this)}
                                        required
                                    /> */}
                                    <div className="field">
                                        <div className="control">
                                            <select
                                                className="input"
                                                onChange={this.handleState.bind(this)}
                                                name="state"
                                                defaultValue={""}>
                                                <option value="test" >Select State</option>
                                                <option value="AL" >Alabama</option>
                                                <option value="AK" >Alaska</option>
                                                <option value="AZ" >Arizona</option>
                                                <option value="AR" >Arkansas</option>
                                                <option value="CA" >California</option>
                                                <option value="CO" >Colorado</option>
                                                <option value="CT" >Connecticut</option>
                                                <option value="DE" >Delaware</option>
                                                <option value="FL" >Florida</option>
                                                <option value="GA" >Georgia</option>
                                                <option value="HI" >Hawaii</option>
                                                <option value="ID" >Idaho</option>
                                                <option value="IL" >Illinois</option>
                                                <option value="IN" >Indiana</option>
                                                <option value="IA" >Iowa</option>
                                                <option value="KS" >Kansas</option>
                                                <option value="KY" >Kentucky</option>
                                                <option value="LA" >Louisiana</option>
                                                <option value="ME" >Maine</option>
                                                <option value="MD" >Maryland</option>
                                                <option value="MA" >Massachusetts</option>
                                                <option value="MI" >Michigan</option>
                                                <option value="MN" >Minnesota</option>
                                                <option value="MS" >Mississippi</option>
                                                <option value="MO" >Missouri</option>
                                                <option value="MT" >Montana</option>
                                                <option value="NE" >Nebraska</option>
                                                <option value="NV" >Nevada</option>
                                                <option value="NH" >New Hampshire</option>
                                                <option value="NJ" >New Jersey</option>
                                                <option value="NM" >New Mexico</option>
                                                <option value="NY" >New York</option>
                                                <option value="NC" >North Carolina</option>
                                                <option value="ND" >North Dakota</option>
                                                <option value="OH" >Ohio</option>
                                                <option value="OK" >Oklahoma</option>
                                                <option value="OR" >Oregon</option>
                                                <option value="PA" >Pennsylvania</option>
                                                <option value="RI" >Rhode Island</option>
                                                <option value="SC" >South Carolina</option>
                                                <option value="SD" >South Dakota</option>
                                                <option value="TN" >Tennessee</option>
                                                <option value="TX" >Texas</option>
                                                <option value="UT" >Utah</option>
                                                <option value="VT" >Vermont</option>
                                                <option value="VA" >Virginia</option>
                                                <option value="WA" >Washington</option>
                                                <option value="WV" >West Virginia</option>
                                                <option value="WI" >Wisconsin</option>
                                                <option value="WY" >Wyoming</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><h4>Zip Code:</h4>
                                    <input
                                        className="input"
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
                                    <h4><label for="waitTimes">How long did you wait?</label></h4>
                                    <select
                                        className="input"
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
                        </table>
                    </div>
                    <br />
                    <div>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <button className="add-submit" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddVaccSite;