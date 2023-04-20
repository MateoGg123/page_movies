import React from 'react'

export const BannerPrincipalHome = ({titulo_pelicula,estrellas,reviews,fecha_salida,adults,descripcion}) => {
  return (
    <div className='BannerPrincipalHome'>
        <img src="https://img.europapress.es/fotoweb/fotonoticia_20160716112139_1200.jpg" alt="" className='bg' />
        <span className="sombraImg"></span>
        <div className="content">
            <div className="titulo_pelicula">{titulo_pelicula}</div>
            <div className="detalles_pelicula">
                <span className="estrellas_pelicula">{estrellas}</span>
                <span className="reviews">{reviews}</span>
                <span className="fechasalida">{fecha_salida}</span>
                <span className="adults">{adults}</span>
            </div>
            <div className="descripcion_pelicula">{descripcion}</div>
            <div className="btn_trailer">
                <a href="https://www.twitch.tv/elcristiangonzalez" className='btn_trailer'>Watch Trailer</a>
            </div>
        </div>
    </div>
  )
}
