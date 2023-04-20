import React, { useEffect } from 'react'
import "../styles/Home/Home.css"
import { helpHttp } from '../helpers/helpHttp'
import { BannerPrincipalHome } from '../components/BannerPrincipalHome'
import { PeliculasEstreno } from '../components/PeliculasEstreno'
import { PeliculasProximamente } from '../components/PeliculasProximamente'
import { PeliculasTrending } from '../components/PeliculasTrending'

export const Home = () => {
    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093"
    
    useEffect(() => {
      /*const fetch = async()=>{
        let resultado = await helpHttp().get(API_URL)

      
        console.log(resultado)
      
      }
      fetch()*/

      fetch(API_URL)
      .then((res)=>res.json())
      .then((res)=>console.log(res))
    }, [])
    
  return (
    <div className='home_contenedor'>
      <BannerPrincipalHome></BannerPrincipalHome>
      <div className="contenedor_peliculas">
        <PeliculasEstreno></PeliculasEstreno>
        <PeliculasProximamente></PeliculasProximamente>
        <PeliculasTrending></PeliculasTrending>
      </div>
    </div>
  )
}
