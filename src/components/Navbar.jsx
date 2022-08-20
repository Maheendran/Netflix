import React, { useState } from 'react'
import '../style/Navbar.css'
import {  MdOutlineAccountCircle } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase'
export const Navbar = () => {
  const[toogle,setToggle]=useState(false)
  const navigate=useNavigate()
  const logout=()=>{
    auth.signOut()
    navigate("/")
  }
  const account=()=>{
    setToggle(!toogle)
  }

  return (
    <div className='Navbar'>
        <NavLink to={"/home"}>
        <img src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" />

        </NavLink>
<ul>
   
<NavLink to={`/search/${28}`}><li>Action</li></NavLink>
<NavLink to={`/search/${27}`}><li>Horror</li></NavLink>
<NavLink to={`/search/${35}`}><li>Comedy</li></NavLink>
<NavLink to={`/search/${10749}`}><li>Romance</li></NavLink>
<NavLink to={`/search/${99}`}><li>Documentaries</li></NavLink>
  

</ul>
<divv className="account">
<MdOutlineAccountCircle onClick={account}  size={"35px"} style={{color:"white",padding:"10px"}}/>

</divv>
<div className='logoutbutton'>
{toogle && 
<button onClick={()=>logout()}>logout</button>}
</div>

    </div>
  )
}
