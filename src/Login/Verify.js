import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Verify() {

    const navigate=useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

  return (
    <div className='w-75 mt-5 m-auto shadow rounded text-center'>
        <h3 className='font'>Check Your Mail for Verification.</h3>
        <Button variant="dark m-2" type='submit' onClick={handleClick}>Continue...</Button> 
    </div>
  )
}

export default Verify;