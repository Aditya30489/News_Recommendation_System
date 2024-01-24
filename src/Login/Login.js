import {Link, useNavigate} from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { useState } from 'react';
import GoogleButton from 'react-google-button';
import { useUserAuth } from './UserAuthContext';
import {toast} from 'react-toastify';
import { auth, db } from './firebase';
import { doc,getDoc,setDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';



const Login = () => {
    
  
  //this is start(15-34)
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  //this logIn in below line is accessible via useUserAuth() in UseAuthContext.js file
  const {logIn} = useUserAuth();
  const {googleSignIn} = useUserAuth();
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");

    if(email === "admin@gmail.in" && password === "admin")
    {
            //await setDoc(doc(db, "admin", "admin"), Obj);
            navigate('/adminpage');
    }

    else
    {
      try {
         
        await logIn(email, password);
        //var ps=localStorage.getItem("signupPassword");
        if(auth.currentUser.emailVerified===true)
        {
            var arr=email.split('@');
            var userId = arr[0];
            const docRef = doc(db, userId, password);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              localStorage.setItem("pwd",password);
              localStorage.setItem("id",userId);
            } else {
              
              console.log("No such document!");
            }
          
            
            toast.success("Logged In Successfully!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              }); 

              navigate('/home');
        }

        else
        {
          toast.error("Email not Verified!", {
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

         
     catch(err) {
    setError(err.message);
    console.log("err = ",err.message);
    toast.error("Wrong Email or passowrd!", {
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
    
};






  const handleGoogleSignIn = async(e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      toast.success("Logged In Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        }); 

       navigate("/home");       
  } catch (err) {
  setError(err.message);
  }

};


  return (
    <div className='q'>
     
      <div className="p-4 rounded vc ">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} >

      
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>

          <div className="d-grid gap-2  w-50 m-auto"> <Button variant="primary" type="Submit" >Login In <FontAwesomeIcon className='ms-2' icon={faRightToBracket} />  </Button>   </div>
         
        </Form>

        <hr />
        <div> <GoogleButton className=" qwe rounded  m-auto" type="dark" onClick={handleGoogleSignIn}/> </div>  

      
      
      </div>

      <div className="p-4 mt-3 text-center rounded vc "> 
          Don't have an account? <Link to="/signup">Sign up</Link>
          <hr/>
      </div>
    </div>


  );
};

export default Login;