// frontend/src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
function App() {
  

  return (
    <>
        <Router>
        <div className='bg-slate-900'>
          <Navbar/>
        </div>
        <div className='content' style={{ overflow: 'auto' }}>
            <Routes>
              <Route exact path="/" element={<HomeScreen/>} />
            </Routes>
            {/* <Navigation/> */}
            <Footer/>
          </div>
        </Router>
    </>
  );
}

export default App;
