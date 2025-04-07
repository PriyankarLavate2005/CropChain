import React, { useState,useEffect } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function SignUp(){
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [phone,setphone]=useState('')
  const [zip,setzip]=useState('')
  const Navigate=useNavigate()
  const Submitform =async (e)=>{
  e.preventDefault();
  let result = await fetch("http://localhost:5000/api/auth/signup",{
    method:'post',
    body:JSON.stringify({name,email,password,phone,zip}),
    headers:{
      'content-type':'application/json'
    },
  })
  result=await result.json()
  console.warn(result)
  if(result){
    localStorage.setItem('user',JSON.stringify(result))
    Navigate('/')
  }
  else{
    alert("Something went wrong")
  }
 }
 useEffect(() => {
  const auth = localStorage.getItem('user');
  if (auth) {
      Navigate('/')
  }
})
  return (
    <div className="signup-container">
      <h1>Create an Account</h1>
      <form method='POST'>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name"  onChange={(e)=>{setname(e.target.value)}} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" onChange={(e)=>{setemail(e.target.value)}}   required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="phone" onChange={(e)=>{setphone(e.target.value)}}  required />
        </div>
        <div className="form-group">
          <label>ZIP Code</label>
          <input type="text" name="zip" onChange={(e)=>{setzip(e.target.value)}}  required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password"  onChange={(e)=>{setpassword(e.target.value)}} required />
        </div>
         <button className="signup-button" onClick={Submitform}>SignUp</button>
      </form>
      <p>Already have an account? <a href="/login">Log in here</a></p>
    </div>
  );
}

export default SignUp;
