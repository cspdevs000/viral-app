import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';

class AddVaccSite extends Component {

    render() {
        return (
            <div>
                <div>
                {<NavigationBar />}
                </div>
                <div>
                <h1>Add a Vaccination Site</h1>
                </div>
                <div>
                <form action="http://localhost:3000/site/new" method="POST">
                        <label>
                            <p>Name</p>
                            <input type="text" name="name" />
                        </label>
                        <label>
                            <p>Address</p>
                            <input type="text" name="address" />
                        </label>
                        <label>
                            <p>City</p>
                            <input type="text" name="city" />
                        </label>
                        <label>
                            <p>State</p>
                            <input type="text" name="state" />
                        </label>
                        <label>
                            <p>Zipcode</p>
                            <input type="text" name="zipCode" />
                        </label>

                        {/* <div className="hours">
                        <label>
                            <p>Monday</p>
                            <input type="text" name="mondayHours" />
                        </label>
                        </div> */}

                        <label>
                            <p>Wait Time (that you experienced)</p>
                            <input type="text" name="waitTimes" />
                        </label>

                        <div>
                            <button type="submit">Submit</button>
                        </div>
                </form>    
                </div>

                <div>
                {/* need search by zip */}
                </div>
            </div>
        );
    }
}

export default AddVaccSite;