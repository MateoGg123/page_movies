import React from 'react'
import { MovieFigure } from './MovieFigure'

export const PeliculasEstreno = ({Estrenos}) => {
  return (
    <div className='contenedor_peli_estrenos'>
      <div className="titulo_peliculas">Estrenos</div>
      <div className="peliculas_api_estrenos">
      {
        Estrenos.length>0?(
          
          Estrenos.map((el,index)=><MovieFigure poster={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} titulo={el.title} key={index}></MovieFigure>)
        ):(
          console.log("JSDJSDJSD")
        )}
      </div>
    </div>
  )
}
