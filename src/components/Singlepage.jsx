import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import { imageUrl } from '../constants/constants'
import { Navbar } from './Navbar'
import '../style/Single.css'
import { AiFillStar,AiOutlineArrowDown } from 'react-icons/ai';
import { FaVideo } from 'react-icons/fa';
import { BsFillCalendarDateFill } from 'react-icons/bs'
export const Singlepage = () => {
    const param=useParams()
    const[urlid,setUrlid]=useState("")
    const[sin,setSin]=useState({})
    const opts = {
      height: '600px',
      width: '100%',
      playerVars: { autoplay: 1}}
  
useEffect(()=>{

  axios.get(`https://api.themoviedb.org/3/movie/${param.movieid}?api_key=d5216454ad4a1d1198e295f1992da7fe&language=en-US`).then((res)=>{
    
    setSin(res.data)
console.log(res.data)
  })
 
},[param.movieid])
// //////////////////////////////
const handleclick=(id)=>{
  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d5216454ad4a1d1198e295f1992da7fe&language=en-U`).then((res)=>{
           
    if(res.data.results.length!==0){
      setUrlid(res.data.results[0]) }
   
     else{
      console.log("empty array")
     }
})
console.log(urlid)
}
  return (
    <>
      <Navbar/>
      <div className='main'>
      <div>
     <img src={imageUrl+sin.backdrop_path} alt="" />
  </div>
  <div className='right-sec'>
  <h1>{sin.original_title}</h1>
      <p>{sin.overview}</p>
      <p> <span><BsFillCalendarDateFill  size="25px" style={{ color: "white",marginTop:"5px"}}/></span> Release date : {sin.release_date}</p>
      <p><span><FaVideo size="30px" style={{ color: "white",marginTop:"5px"}}/></span> Runtime : {sin.runtime} min</p>
      <p><AiFillStar size="30px"
      style={{ color: "rgb(243, 198, 0)",marginTop:"5px"}}/>{sin.vote_average}</p>
      <button onClick={()=>handleclick(sin.id)} className='button-watch'>WATCH NOW</button>
      {urlid && <AiOutlineArrowDown className='arrow' size="35px"
      style={{ color: "white",marginTop:"5px"}}/>}
      </div>
     
      </div>
<div className='youtube'>
{urlid && <YouTube videoId={urlid.key} opts={opts}/>}
</div>
    
  
    </>
  )
}
