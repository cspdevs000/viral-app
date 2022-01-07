import './NavigationBar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const { handleLogout, user } = props;
  console.log(user);
  const { id, name, email, exp } = user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();
  let file = {};

  // make a condition that compares exp and current time
  if (currentTime >= expirationTime) {
    handleLogout();
    alert('Session has ended. Please login to continue.');
  }

  const handleChange = (event) => {
    file = event.target.files[0];
    console.log('running', file);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit', file);
    var img = document.querySelector('img');
    img.src = URL.createObjectURL(file);

    // axios.post(`http://localhost:3000/`, img.src)
    // .then(response => {
    //   console.log('RESPONSE', response)
    //  })
    //  .catch(error => {
    //      console.log('===> Error on login', error);
    //  });
  }
  
  const userData = user ?
    (<div>
      <div>
        <h1>profile page</h1>
      </div>
      <div>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <h1>Account ID: {id}</h1>
            <input onChange={handleChange} type='file' />
            <form onSubmit={handleSubmit} >
              <button type="submit" >Submit</button>
            </form>
                
            <br/>
            <img id="myImg" src="#"></img>
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