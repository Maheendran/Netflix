import React, { useEffect, useState } from 'react'
import '../style/Rowposter.css'
import axios from'./axiox'
import { Loading } from './Loading'
import { imageUrl,API_KEY } from '../constants/constants'
import YouTube from 'react-youtube'


export const Rowposter = (props) => {
    const opts = {
        height: '390px',
        width: '100%',
        playerVars: { autoplay: 1}}
  
    const[loading,setLoading]=useState("false")
    const[movies,setMovies]=useState([])
    const[urlid,setUrlid]=useState("")
    
   useEffect(()=>{
   
    axios.get(props.url).then((res)=>{
    setLoading(true)
    setMovies(res.data.results)
    setLoading(false)
})
   })
//    /////////////////////////////
const handlemovie=(id)=>{

   axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
   if(res.data.results.length!==0){
    setUrlid(res.data.results[0]) }
  
   else{
    console.log("empty array")
   }
  
})
}
  return (
    <>
    {loading ? <Loading/> :
    <div>
     <h2 style={{padding:"10px"}}>{props.title}</h2>
    <div className='row'>
        <div className={props.isSmall ? "smallposters" : 'posters'} >
            {movies.map((e)=>
                <img  key={e.id}  onClick={()=>handlemovie(e.id)} src={`${imageUrl+e.backdrop_path}`} alt="" /> 
            )}
       
        </div>
   
    
    </div>
    {urlid && <YouTube opts={opts} videoId={urlid.key}/>}
   
    </div>}
    
    </>
  )
}
