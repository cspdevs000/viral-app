import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import './App.css';
import Profile from './components/Profile';
import CountyData from './components/CountyData';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Site from './components/Site';
import VaccSites from './components/VaccSites';
import AddVaccSite from './components/AddVaccSite';
import NavigationBar from './components/NavigationBar';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
      alert('YOU LOGGED OUT');
    }
  }

  const handleProfileUpdateLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
      alert('Please log back in');
      window.location.href = '/login'
    }
  }

  return (
    <div >
      <NavigationBar handleLogout={handleLogout} user={currentUser} isAuth={isAuthenticated} />
      <BrowserRouter>
        <div className="everything test">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route
              path="/login"
              element={<Login
                nowCurrentUser={nowCurrentUser}
                setIsAuthenticated={setIsAuthenticated}
                user={currentUser} />}
            />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Home />} />
            <Route path='/site/:id' element={<Site user={currentUser} />} />
            <Route path='/countydata' element={<CountyData user={currentUser} />} />
            <Route path='/sites' element={<VaccSites />} />
            <Route path='/addsite' element={<AddVaccSite />} />
            <Route path="/profile" element={<Profile user={currentUser} handleLogout={handleLogout} handleProfileUpdateLogout={handleProfileUpdateLogout} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
