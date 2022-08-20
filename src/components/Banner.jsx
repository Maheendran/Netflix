import React, { useEffect, useState } from 'react'
import '../style/Banner.css'
import axios from './axiox'
import { API_KEY ,imageUrl} from '../constants/constants'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
export const Banner = () => {
    const[movie,setMovie]=useState([])
    useEffect(()=>{
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{

setMovie (res.data.results)


})

    },[])
  return (
     
    <div>
        <div className='banner-img'>
       <Splide options={{perPage:1,
   pagination:false,drag:'free',
  gap:"1rem"}}>
       {movie.map((e)=>(
        <SplideSlide key={e.id}>
            <div>
            <img src={imageUrl+e.backdrop_path} alt="movie" />
            <div className='banner'>
<div className='content'>
<h1 className='title'>{movie ? e.title:""}</h1>
<div className='banner-buttons'>
    <button>play</button>
    <button>my list</button>
</div>
<h1 className='para'>
{movie ? e.overview:""}
</h1>

</div>
    </div>
          
            </div>
      
        </SplideSlide>
           ))}
       </Splide>
    
        </div>

 
    </div>
  )
}
