import React, { useContext, useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useHistory, useLocation
} from "react-router-dom";
import Header from '../Header/Header';
import { Context } from '../../App';
if (!firebase.apps.length)  {
  firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const [loggedUser,setloggedUser]=useContext(Context)
  const history = useHistory()
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
 
  
  const [newUser,setnewUser]=useState(false);
  const [user,setUser]=useState({
    issigned:false,
    name:"",
    email:"",
    image:"",
    password:"",
    error:"",
    success:false,
    signup:false
  })
 
  const googlesign=()=>{
    
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // cons/ole.log(user)
        const{displayName,email,photoURL}=user
        console.log(displayName)
        const signedData={
          issigned:true,
          name:displayName,
          email:email,
          image:photoURL
        }
        setUser(signedData)
        setloggedUser(user)
        history.replace(from);
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
    const FBprovider = new firebase.auth.FacebookAuthProvider();
 const facebookSign=()=>{
  firebase.auth().signInWithPopup(FBprovider).then(function(result) {
  
    var token = result.credential.accessToken;
   
    var User = result.user;
    console.log('FB User',User)
   
    // setloggedUser(user)
    // history.replace(from);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
 }
//  const signOut=()=>{
//   firebase.auth().signOut()
//   .then(function() {
    
//    console.log('getddahelloutaere')
//    const signnot={
//     issigned:false,
//      name:"",
//      email:"",
//      image:"",
//      password:""
     
//    }
//    setUser(signnot)
 
//   }
  
//   )

//   .catch(function(error) {
//     console.log(error.message)
//   });
//  }
 const changehandle=(e)=>{
  let isformValid;
  if(e.target.name==="email"){
      isformValid= /\S+@\S+\.\S+/.test(e.target.value)
  //    console.log(validEmail)
  }
  if (e.target.name==="password") {
      const validLength=e.target.value.length>6
      const validNum=/\d{1}/.test(e.target.value);
      isformValid=validLength && validNum;
      
  }
  if (isformValid) {
      console.log("abrakadabrah")
    
      const newuserInfo={...user};
      newuserInfo[e.target.name]=e.target.value;
      setUser(newuserInfo)
      // console.log(name)

      
  }
  
  if (!isformValid) {
      console.log("abrabrah")
      
  }}
  const submitHandle=(e)=>{
 
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      
      .then(res=>{
        user.issigned=true
           
        
        const newuserInfo={...user}
        newuserInfo.success=true
        newuserInfo.error=""
       setUser(newuserInfo);
       
       updateUserProfie(user.name)
       setloggedUser(user)
       history.replace(from);
      })
      .catch(function(error) {
        // Handle Errors here.
        
        const newuserInfo={...user}
          newuserInfo.error=error.message
         newuserInfo.success=false
          setUser(newuserInfo);

        // ...
      })
      
      
    }
   if (!newUser && user.email && user.password) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res=>{
      
      user.issigned=true
           
        
      const newuserInfo={...user}
      newuserInfo.success=true
      newuserInfo.error=""
     setUser(newuserInfo);
     console.log(res)
     setloggedUser(user)
     history.replace(from);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      const newuserInfo={...user}
      newuserInfo.success=false
      newuserInfo.error=errorMessage
     setUser(newuserInfo);
      // ...
    }); 
   }

    e.preventDefault();
  
  }
  const signUP=()=>{
    const signUper={...user}
     signUper.signup=true
     setUser(signUper)
  }
  const signinHandler=()=>{
    const signUper={...user}
    signUper.signup=false
    setUser(signUper) 
  }
      
      // const goHandle=()=>{
      //   history.push('/Registration')
      // }
      const updateUserProfie=nameis=>{
        var user = firebase.auth().currentUser;

user.updateProfile({
  displayName:nameis
}).then(function() {
  console.log("Update successful.....")
}).catch(function(error) {
  console.log(error)
});
      }

          
    return (
      <div >
       <Header name={loggedUser.email}/>
    <h1>{loggedUser.email}</h1>
  <div class="container">
  <h1>{user.name}</h1>
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5 w-100 ml-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin" onSubmit={submitHandle}>
                {newUser&&
              <input type="text" name="name" className="form-control w-100 bg-light my-2" placeholder="enter the Username"/>}
                {newUser&&
                <input onBlur={changehandle} type="text" className="form-control w-100 bg-light  my-2" name="firstName" placeholder="first Name" />
                }
                {newUser&&<input onBlur={changehandle} type="text" className="form-control w-100 bg-light  my-2" name="lastName" placeholder="enter last name" />}

                <input onBlur={changehandle} type="text" className="form-control w-100 bg-light  my-2" name="email" placeholder="enter the Email" />

                
 
 

                <input onBlur={changehandle} className="form-control w-100 bg-light  my-2" type="text" id="passCode" name="password" placeholder="enter the password"/>
                 
                 {newUser&&
                 <input onBlur={changehandle} className="form-control w-100 bg-light  my-2" type="text" name="confirmation" placeholder="confirm the password"/>}
            
              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" onClick={()=>setnewUser(!newUser)} id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Create New Account</label>
              </div>
             {user.issigned==false && newUser==false? <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={signinHandler}>Sign in</button>
             : <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={signinHandler} >Sign up</button>}
                 
              <hr class="my-4"/>
              <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit" onClick={googlesign}><i class="fab fa-google mr-2"></i> Sign in with Google</button>
              <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit" onClick={facebookSign}><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
              {/* <Link to="/Registration"> */}
                {/* <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit" onClick={signUP} ><i class=" mr-2"></i> create an account?</button> */}
                {/* </Link> */}
            </form>
            </div>
        </div>
      </div>
    </div>
  </div>
  {user.success?<h4 className="text-success state"  >User is{newUser?"Created ":"logged in"}succesfuly</h4>:<h4 className="text-danger state">{user.error}</h4>}

</div>      
            
    );
};

export default Login;