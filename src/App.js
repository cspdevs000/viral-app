import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import CountyData from './components/CountyData';
import Landing from './components/Landing';
import LoginPage from './components/LoginPage';
import Signup from './components/Signup';
import Home from './components/Home';
import VaccSites from './components/VaccSites';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Landing/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/countydata' element={<CountyData/>}/>
          <Route path='/sites' element={<VaccSites/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;