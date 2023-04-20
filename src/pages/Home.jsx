import React, { useEffect, useState } from 'react'
import "../styles/Home/Home.css"
import { helpHttp } from '../helpers/helpHttp'
import { BannerPrincipalHome } from '../components/BannerPrincipalHome'
import { PeliculasEstreno } from '../components/PeliculasEstreno'
import { PeliculasProximamente } from '../components/PeliculasProximamente'
import { PeliculasTrending } from '../components/PeliculasTrending'

const initialForm = {
  titulo_pelicula:"",
  estrellas:"",
  reviews:"",
  fecha_salida:"",
  adults:false,
  descripcion:"",
  poster:""
}

export const Home = () => {
    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093"
    const API_POSTER_MOVIE = `https://image.tmdb.org/t/p/w500/`


    const [DatosPelicula, setDatosPelicula] = useState(initialForm)
    const [Estrenos, setEstrenos] = useState([])
    const [Proximamente, setProximamente] = useState([])
    const [Trending, setTrending] = useState([])
    

    useEffect(() => {
      const fetch = async()=>{
        let resultado = await helpHttp().get(API_URL)
        resultado = resultado.results;
      
        setEstrenos(resultado.slice(0, 5));
        setProximamente(resultado.slice(5, 10))
        setTrending(resultado.slice(10, 15))
        //console.log(array_estrenos)
      
      }
      fetch()
    }, [])
    
  return (
    <div className='home_contenedor'>
      <BannerPrincipalHome></BannerPrincipalHome>
      <div className="contenedor_peliculas">
        <PeliculasEstreno Estrenos={Estrenos}></PeliculasEstreno>
        <PeliculasProximamente></PeliculasProximamente>
        <PeliculasTrending></PeliculasTrending>
      </div>
    </div>
  )
}
