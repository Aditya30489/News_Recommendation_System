import React from 'react';
import { toast } from 'react-toastify';
import { useUserAuth } from './UserAuthContext';
import './Home.css';
import {useNavigate } from 'react-router-dom';
import {  faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Posts1 } from './Posts/Posts1';
//import { Posts2 } from './Posts/Posts2';

const Home = () => {

  let {user,logOut} = useUserAuth();
  const navigate = useNavigate();
  const handleLogOut = async(e) => {
    e.preventDefault();
    try 
     {
        await logOut();
        localStorage.clear();
        toast.success("Logged Out Successfully!", {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         });
        navigate("/")
     }

     catch(err) 
     {
        console.log(err.message);
        toast.error("Not Logged Out!", {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         });
     }
  }

  const name=localStorage.getItem("name");
  const email=localStorage.getItem("email");
  const rl=localStorage.getItem("rollno");
  return (
    <div className='container main '>
        <div className='shd shadow rounded-3 mt-3'>
            
                <FontAwesomeIcon icon={faUser} className='text-dark p-2' size='4x' />
                  <div className="details">
                    <p>{user.displayName} </p>
                    <p>{user.email}</p>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{rl}</p>
                  </div>
        </div>

        <div>
          <h1 className='font'>Welcome to News Today !!</h1>
        </div>
        
        <div className=" mx-auto">
          <Posts1 />
        </div>
          
         
          <div class="list-group q">
            <div className='rounded m-1 shadow-sm lis'>
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleLogOut}><FontAwesomeIcon icon={faLock} className='me-3'  />logOut</button> 
            </div>
          </div>
       </div>
  );
};

export default Home;