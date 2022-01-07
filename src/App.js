import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import './App.css';
import Profile from './components/Profile';
import CountyData from './components/CountyData';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Site from './components/Site';
import VaccSites from './components/VaccSites';
import AddVaccSite from './components/AddVaccSite';
import NavigationBar from './components/NavigationBar';

const PrivateRoute = ({ component: Component, ...rest}) => {
  let token = localStorage.getItem('jwtToken');
  // console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Navigate to="/login"/>
  }} />
}

function App() {

  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      // console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    // console.log('===> nowCurrentUser is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      // console.log('YOU LOGGED OUT')
      setCurrentUser(null);
      setIsAuthenticated(false);
      alert('YOU LOGGED OUT');
    }
  }

  return (
    <div>
      <NavigationBar handleLogout={handleLogout} user={currentUser} isAuth={isAuthenticated}/>
      <BrowserRouter>
      <div>
       
        <Routes>
          <Route exact path='/' element={<Landing/>}/>
          <Route 
            path="/login"
            element={<Login
            nowCurrentUser={nowCurrentUser} 
            setIsAuthenticated={setIsAuthenticated} 
            user={currentUser}/>}
          />

          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/site/:id' element={<Site/>}/>
          <Route path='/countydata' element={<CountyData/>}/>
          <Route path='/sites' element={<VaccSites/>}/>
          <Route path='/addsite' element={<AddVaccSite/>}/>
          <Route path="/profile" element={<Profile user={currentUser} handleLogout={handleLogout}/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;