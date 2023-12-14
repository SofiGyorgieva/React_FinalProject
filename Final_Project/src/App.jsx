import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

import styles from './App.module.css'

import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.general}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/upcomming" element={<Home />}/>
          <Route path="/past" element={<Home />}/>
          <Route path="/myEvents" element={<Home />}/>
          <Route path="/goingTo" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/logout" element={<Home />}/>
        </Routes>
      </div>
    </>
  )
};

export default App;
