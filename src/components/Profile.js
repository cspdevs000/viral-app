import './NavigationBar.css';
import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, useRef } from "react";
import { Image } from 'cloudinary-react';
// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });


const Profile = (props) => {
  const { handleLogout, user } = props;
  console.log(user);
  const { id, name, email, exp } = user;
  console.log(email)
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();
  let file = {};
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [imageIds, setImageIds] = useState();
  const [userEmail, setUserEmail] = useState('');
  const firstRenderRef = useRef(true)


  // make a condition that compares exp and current time
  if (currentTime >= expirationTime) {
    handleLogout();
    alert('Session has ended. Please login to continue.');
  }

  //Gets the cloudinary publicURL and add to state
  const loadImage = async () => {
    try {
      console.log('email', email);
      const res = await fetch(`http://localhost:3000/users/photo/${email}`);
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
    console.log(firstRenderRef.current)
    if (firstRenderRef.current) {
      firstRenderRef.current = false

    } else {
      loadImage();
    }
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
      await fetch('http://localhost:3000/users/photo', {
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


  const userData = user ?
    (<div>
      <div className="column">
        <div>
          <h1>Profile</h1>
        </div>
        <div>
          <div class="content">
            <table>
              <tr>
                <th></th>
              </tr>
              <tr>
                <td>Name: {name}</td>
              </tr>
              <tr>
                <td>Email: {email}</td>
              </tr>
              <tr>
                <td>Account ID: {id}</td>
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
                  <br/>
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