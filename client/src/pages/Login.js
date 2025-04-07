import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Login(){

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    const Navigate = useNavigate()
    const Submitform = async (e) => {
        e.preventDefault()
        let result = await fetch("http://localhost:5000/api/auth/login",{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
    
    result=await result.json();
    console.warn(result)
    if(result.email){
        localStorage.setItem('user',JSON.stringify(result))
        Navigate('/')
    }
    else{
        alert("please enter Correct details")
    }
    }
    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            Navigate('/')
        }

    })   
    return (
        <div className="signup-container">
            <h1>Create an Account</h1>
            <form method='POST'>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" onChange={(e) => { setemail(e.target.value) }} required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" onChange={(e) => { setpassword(e.target.value) }} required />
                </div>
                <button className="signup-button" onClick={Submitform}>Login</button>
            </form>
            <p>dont have Account? <a href="/signup">Signup  here</a></p>
        </div>
    );

}

export default Login;
