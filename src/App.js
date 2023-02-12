import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Store from './pages/store/Store';
import { getAuth } from 'firebase/auth';
import { app } from './firebaseConfig';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/store' element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
