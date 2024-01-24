import {toast} from 'react-toastify';
import { Button,Form , Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from './UserAuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from './firebase';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import { sendEmailVerification } from 'firebase/auth';
import React, {useState} from 'react';
import './Signup.css';


const Signup = () => {

  
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [number,setNumber] = useState("");
    const [Dt, setDate] = useState("");
    const [password, setPassword] = useState("");
    const [branch, setBranch] = useState("");
    const [rollno, setRollno] = useState("");
    const [show, setShow] = useState(false);
   

    const navigate = useNavigate();

    const {signUp} = useUserAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setName(name);
        setError("");
        try 
        {
            await signUp(email, password);   
            updateProfile(auth.currentUser, {
              displayName: name,
            })
             
            await sendEmailVerification(auth.currentUser)
            .then(() =>setShow(true)).catch(e=>console.log(e))
            
           
              var arr=email.split('@');
              var userId = arr[0];
              const Obj={name,number,email,Dt,rollno,branch};
              let userObj_serialsed = JSON.stringify(Obj);
              localStorage.setItem("userObj_serialsed",userObj_serialsed);
              
              
             // await setDoc(doc(db, "rollno", userId), Obj);
              localStorage.setItem("uid",userId);
  
             
             navigate("/verify");
             
             toast.success("Check your Mail!", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });          
            

            
                
         

        }
        
        catch (err) 
        {
          //alert(err.message);
          setError(err.message);
          console.log("err = ",err.message);
          toast.error("Something Went Wrong in Creating User!",  {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        }

        setDate("");
        setName("");
        setBranch("");
        setRollno("");
        setNumber("");
        setEmail("");
        setPassword("");

     };


    


  return (
    <div className='q m-auto'>
      <div className='qwer w-100 mb-2'>
          <div className="bloc-tabs">
            
            <h3 className='active-tabs1  text-center text-dark font p-3 rounded'>
              SignUp
            </h3>
          </div>
        </div>
      <div className="p-4 vc rounded shadow">
        
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="name" placeholder="Enter Username" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
            <Form.Control type="text" placeholder="Enter DOB" value={Dt} onChange={(e) => setDate(e.target.value)} />
        </Form.Group>


           <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
              <PhoneInput  defaultCountry='IN' value={number} onChange={setNumber} placeholder = "Enter Phone Number"/>
                <div id='recaptcha-container'/>
            </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>

        
        <div className="d-grid gap-2"> <Button variant="primary" type="Submit"> SignUp </Button> </div>
       
        </Form>
     </div>

     <div className="p-4 vc shadow rounded mt-3 text-center"> Already have an account? <Link to="/">Log In</Link> </div>
    </div>
  );
};


export default Signup;


