import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="wrapper">
      <h1>Welcome to Viral</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;