import './NavigationBar.css';
import './Profile.css';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';
import { useEffect, useState, useRef } from "react";
import { Image } from 'cloudinary-react';
import CountyOptions from './CountyOptions';
const { REACT_APP_SERVER_URL } = process.env;

let countyData = [];

const Profile = (props) => {
  const { handleLogout, user } = props;
  console.log(user);
  const { id, name, email, exp, county, state } = user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();
  let file = {};
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [imageIds, setImageIds] = useState();
  const [userEmail, setUserEmail] = useState('');
  const firstRenderRef = useRef(true);
  const [newName, setName] = useState(user.name); 
  const [newEmail, setEmail] = useState(user.email);
  const [newState, setState] = useState(user.state);
  const [newCounty, setCounty] = useState(user.county);
  const [display, setDisplay] = useState();



  // make a condition that compares exp and current time
  if (currentTime >= expirationTime) {
    handleLogout();
    alert('Session has ended. Please login to continue.');
    window.location.href = '/login';
  }

  //Gets the cloudinary publicURL and add to state
  const loadImage = async () => {
    try {
      console.log('email', email);
      const res = await fetch(`${REACT_APP_SERVER_URL}/users/photo/${email}`);
      const data = await res.json();
      console.log('Test String', data);
      setImageIds(data);
    }
    catch (error) {
      console.log(error);
    }
  }

  //loads the function only once
  useEffect(() => {
    console.log('render', firstRenderRef.current)
    if (firstRenderRef.current) {
      firstRenderRef.current = false

    } else {
      loadImage();
      axios.get(`${REACT_APP_SERVER_URL}/countyData/counties`)
        .then((response) => {
          countyData = response.data.countyNameArr;
          console.log('COUNTY DATA', countyData);

          setDisplay(countyData.map((c, idx) => {
            return (
              <CountyOptions
                key={idx}
                name={c}
              />
            )
          }))

        })
        .catch((error) => {
          console.log('ERROR COUNTY DATA', error);
        })
    }
    console.log('USER', user);

    //useEffects depends on props. when it changes, useEffects reruns
  }, [props])

  //Grabs the file and runs previewFile function
  const handleChange = (event) => {
    file = event.target.files[0];
    console.log('running', file);
    previewFile(file);
  }

  //translates the image file to a readable URL/string and set to state
  const previewFile = (file) => {
    const reader = new FileReader();
    //converts image to URL
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
    console.log("preview source", previewSource);
  }

  //Reaches out to backend passing the data URI
  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage)

    try {
      await fetch(`${REACT_APP_SERVER_URL}/users/photo`, {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage, userId: id }),
        headers: { 'Content-type': 'application/json' }
      })
    }
    catch (error) {
      console.log(error);
    }

  }

  // if no image string, end. if there is, call uploadImage
  const handleSubmit = (event) => {
    console.log('submitting')
    event.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
    setTimeout(() => { window.location.reload(false) }, 3000);

  }


  const handleInfoSubmit = (event) => {

    const data = {
      user: user,
      newName: newName,
      newEmail: newEmail,
      newState: newState,
      newCounty: newCounty
    }
    axios
      .post(`${REACT_APP_SERVER_URL}/users/update`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log("===> Error in Profile Update", error));
  }

  const handleName = (e) => {
    setName(
        e.target.value,
    );
  }
  const handleEmail = (e) => {
    setEmail(
        e.target.value,
    );
  }
  const handleState = (e) => {
    setState(
        e.target.value,
    );
  }
  const handleCounty = (e) => {
    setCounty(
        e.target.value,
    );
  }


  const userData = user ?
    (<div className="profile-container">
      <div className="column">
        <div>
          <h1 >Profile</h1>
        </div>
        <div>
          <div className="content">
            <table>
              <tr>
                <th></th>
              </tr>
              <tr>
                <td>Name: {name}
                  <br />
                  <br />
                  <input value={newName} defaultValue={newName} onChange={handleName.bind(this)} type="text" name="name" placeholder={name} />
                </td>
              </tr>
              <tr>
                <td>Email: {email}
                  <br />
                  <br />
                  <input value={newEmail} defaultValue={newEmail} onChange={handleEmail.bind(this)} type="text" name="email" placeholder={email} />
                </td>
              </tr>
              <tr>
                <td>Account ID: {id}</td>
              </tr>
              <tr>
                <td>State: {state}
                  <br />
                  <br />
                  <select
                    value={newState} 
                    defaultValue={newState}
                    onChange={handleState.bind(this)}
                    name="state">
                    <option value="test" >Select New State</option>
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
                </td>
              </tr>
              <tr>
                <td>County: {county}
                  <br />
                  <br />
                  <select
                    value={newCounty} 
                    defaultValue={newCounty}
                    onChange={handleCounty.bind(this)}
                    name="county">
                    <option value="test" >Choose New County</option>
                    {display}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Update with new submissions:
                  <br />
                  <br />
                  <form onSubmit={handleInfoSubmit} >
                    <button type="submit" >Submit</button>
                  </form>
                </td>
              </tr>
              <tr>
                <td>
                  Current Vaccination Card :
                  <br />
                  <br />
                  {imageIds && imageIds.map((imageId, index) => (
                    <Image
                      key={index}
                      cloudName="djtd4wqoc"
                      publicId={imageId}
                      width="500"
                      crop="scale"
                    />
                  ))}
                </td>
              </tr>

              <tr>
                <td>
                  Change Vaccination Card :
                  <br />
                  <br />
                  <form onSubmit={handleSubmit} >
                    <input onChange={handleChange} name="image" value={fileInputState} type='file' />

                    <button type="submit" >Submit</button>
                  </form>
                  <br />
                  {previewSource && (
                    <img src={previewSource} style={{ height: '200px', width: '300px' }} />
                  )}
                </td>
              </tr>
            </table>
          </div>

          <br></br>
          <br />

        </div>
      </div>
    </div>) : <h2>Loading...</h2>

  const errorDiv = () => {
    return (
      <div>
        <h3>Please <Link to="/login">login</Link> to view this page</h3>
      </div>
    );
  };

  return (
    <div>
      {user ? userData : errorDiv()}
    </div>
  );

}

export default Profile;