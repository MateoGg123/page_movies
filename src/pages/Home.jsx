import React, { useEffect } from 'react'
import "../styles/Home/Home.css"
import { helpHttp } from '../helpers/helpHttp'

export const Home = () => {
    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093"
    useEffect(() => {
      const fetch = async()=>{
        let resultado = await helpHttp().get(API_URL)

      
        console.log(resultado)
      
      }
      fetch()
    }, [])
    
  return (
    <div className='home_contenedor'>Home</div>
  )
}
