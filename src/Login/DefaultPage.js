import React from 'react';
import Login from './Login';
import './DefaultPage.css';
import loginsvg from '../images/3.svg'


function DefaultPage() {

 
  return (
    <div className='d-flex justify-content-between '>
      <img className=" er" src={loginsvg} />
      <div className='qwer '>
          <div className="bloc-tabs">
           
            <p className='active-tabs1 text-center text-dark font p-3 rounded'>
              UserLogin
            </p>
          </div>

          <div>
            <div className='row '>
              <Login />
            </div>
              
          </div>
        </div>
    </div>
)}

export default DefaultPage;