import React from 'react'

export const MovieFigure = ({poster,titulo}) => {
  return (
    <figure className='figure_movies'>
        <img src={poster} alt="" className='img_figure_movies'/>
        <figcaption className='title_poster_movies'>{titulo}</figcaption>
    </figure>
  )
}
