import React from 'react';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Home from './Login/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Row, Col } from 'react-bootstrap';
import "./App.css";
import {UserAuthContextProvider} from "./Login/UserAuthContext";
import DefaultPage from './Login/DefaultPage';
import Verify from './Login/Verify';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

export default function App() {

const [userId,setUserId] = useState("");
const getUserIdHandler = (id) => {
  console.log("id = ",id);
  setUserId(id);
}

  return (
  <div>
    
    <div className='container-fluid'>
    <Row>
      <Col>
        <UserAuthContextProvider>       
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/verify" element={<Verify/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<DefaultPage />} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
          <ToastContainer />
        </UserAuthContextProvider>  
      </Col>
    </Row> 
  </div> 
  </div> 
)
}
