// frontend/src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import './index.css';
import SignUp from './components/Signup';
import TravelBuddy from './components/TravelBuddy';
import Home from './components/Home';
function App() {
  
  return (
    <>
        <Router>
        <div className='bg-slate-900'>
          <Navbar/>
        </div>
        <div className='content' style={{ overflow: 'auto', minHeight: 'calc(100vh - 80px)'}}>
            <Routes>
              <Route exact path="/" element={<HomeScreen/>} />
              <Route exact path='/login' element={<Login></Login>}/>
              <Route exact path='/signup' element={<SignUp></SignUp>}></Route>
              <Route exact path='/travelbuddy' element={<TravelBuddy></TravelBuddy>}></Route>
              <Route exact path='/home' element={<Home></Home>}></Route>
            </Routes>
            {/* <Navigation/> */}
            <Footer/>
          </div>
        </Router>
    </>
  );
}

export default App;
