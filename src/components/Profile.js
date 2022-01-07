import './NavigationBar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const { handleLogout, user } = props;
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
      <div className="column">
        <div className="card">
          <div className="card-content">
            <h3 className="title is-4" style = {{color: 'black'}}>Profile</h3>

            <div className="content">
            <form onSubmit={handleSubmit} >
              <table className="table-profile">
                <tr>
                  <th colspan="1"></th>
                  <th colspan="2"></th>
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
                  <input onChange={handleChange} type='file' />
                  <button type="submit" >Submit</button>
                </tr>
              </table>
              </form>
            </div>
            <br/>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
            <img id="myImg" src="#"></img>
            </figure>
          </div>
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