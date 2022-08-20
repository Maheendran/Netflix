
import axios from 'axios'
import { useEffect, useState } from 'react'
import {  useParams,NavLink } from 'react-router-dom'
import { API_KEY, imageUrl } from '../constants/constants'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import '../style/Search.css'
import { Navbar } from './Navbar'

export const Search = () => {
    const[categ,setCateg]=useState([])
    const param=useParams()
   
   

useEffect(()=>{
axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${param.id}`).then((res)=>{

setCateg(res.data.results)
})
},[param.id])



  return (
    <>
 
    <Navbar/>
    <h1>title</h1>
    <Splide options={{perPage:1,
   pagination:false,drag:'free',
  gap:"1rem"}}>
       {categ.map((e)=>(
        <SplideSlide key={e.id}>
            <div key={e.id}>
            <img className='banner-image' src={imageUrl+e.backdrop_path} alt="movie" />
            <div className='banner'>
<div className='content'>
<h1 className='title'>{categ ? e.title:""}</h1>
<div className='banner-buttons'>
    <button>play</button>
    <button>my list</button>
</div>
<h1 className='para'>
{categ ? e.overview:""}
</h1>

</div>
    </div>
          
            </div>
      
        </SplideSlide>
           ))}
       </Splide>

       <div className='movie-grid'>
{categ.map((e)=>(
       
    <div key={e.id}>
       
        <NavLink to={`/moviedetail/${e.id}`}>
        <img className='banner-image-grid ' src={imageUrl+e.backdrop_path} alt="" />
     
        </NavLink>
      
    </div>

))}
</div>
      
    </>
  )
}
