// import React from 'react';
// import { useState,} from 'react';
// import { Navigate,useNavigate} from 'react-router-dom';
// import './Login.css';
// import axios from 'axios'

import {useNavigate } from "react-router-dom"

 

// function Login() {
//   const Navigate=useNavigate()
//   async function Submitdata(e){
//     e.preventDefault()
//     try{
//       await axios.post("http://localhost:8500/",{
//         password,phone
//     }).then(res=>{
//       if (res.data=='ok'){
//         alert("You sucessfully Logged in")
//         Navigate('/home')
//       }
//       else if (res.data=='noaccount'){
//         alert("you dont have account")
//       }
//     })
//     }
//     catch(e){
//       console.log("something went wrong")
//     }
//   }
//   const [phone,setphone]=useState('')
//  const [password,setpassword]=useState('')
//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form>
//         <div className="form-group">
//           <label>Phone Number:</label>
//           <input type="text" placeholder="Enter your phone number" onChange={(e)=>{setphone(e.target.value)}} />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" placeholder="Enter your password" onChange={(e)=>{setpassword(e.target.value)}}/>
//         </div>
//         <button type="submit" onClick={Submitdata}>Login</button>
//       </form>
//       <p>
//         If you don't have an account, <a href="/signup">Sign up here</a>
//       </p>
//     </div>
//   );
// }

// export default Login
const Logout=()=>{
  const Navigate=useNavigate()
 const logout= localStorage.removeItem('user')
 if (logout){
  alert("user Logged out sucessfully")
  Navigate('/signup')
 }
  return(
    <>
    </>
  )
}
export default Logout
