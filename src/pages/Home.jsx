import React from 'react'
import { Banner } from '../components/Banner'
import { Navbar } from '../components/Navbar'
import { Rowposter } from '../components/Rowposter'
// import { Rowposter } from './components/Rowposter';
import {orginal,action,Comedy,Horror,Romance,Documentaries}from'../components/url'
export const Home = () => {
  return (
    <div>
        <Navbar/>
    <Banner/>
    <Rowposter title="Netflix Orginals" url={orginal}/>
    <Rowposter title="Action" isSmall url={action}/>
    <Rowposter title="Comedy" isSmall url={Comedy}/>
    <Rowposter title="Horror" isSmall url={Horror}/>
    <Rowposter title="Romance" isSmall url={Romance}/>
    <Rowposter title="Documentaries" isSmall url={Documentaries}/>
    </div>
  )
}
