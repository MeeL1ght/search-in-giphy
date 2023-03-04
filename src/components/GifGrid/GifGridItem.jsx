import React from 'react'

const GifGridItem = ({ title, url }) => (
  <div className='card animate__animated animate__fadeInUp'>
    <p className='card__title'>{ title }</p>
    
    <img
      className='card__image'
      src={ url }
      alt={ title }
    />
  </div>
)

export default GifGridItem
