import React, { useState } from 'react'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import '../style/Login.css'
export const Login = () => {
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[signup,setSignup]=useState(false)

    const handlelogin=()=>{
        signInWithEmailAndPassword(auth,email,password)
      .then(auth=>navigate("/home"))
      
      .catch(error=> alert("Please Sign In") )
      }

      const handlesignup=()=>{
        createUserWithEmailAndPassword(auth,email,password)
      .then(auth=>navigate("/home"))
      
      .catch(error=> alert("Please Sign In") )
      }

      const toggle=()=>{
setSignup(!signup)
      }

  return (<>
  <div className='background'>
  <div className='logo'>
  <img src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" />

  </div>
  {signup ?
    <div className='registerform' >
      <h1> Sign Up</h1>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email' />
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' />
       <div className='signin'>
       <button onClick={handlesignup}> Sign Up</button>
     <p onClick={toggle}>Sign In?</p>

       </div>
       
    </div>:
      <div className='registerform' >
      <h1>Sign In</h1>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email' />
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' />
       <div className='signin'>
       <button onClick={handlelogin}>Sign In</button>
       <p onClick={toggle}>  Sign Up?</p>

       </div>
       
    </div>
    }


    </div>
    </>
  )
}
