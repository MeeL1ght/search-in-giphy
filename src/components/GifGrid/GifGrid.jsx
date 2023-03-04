import React from 'react'
import GifGridItem from './GifGridItem.jsx'
import { useFetchGifs } from './../../hooks/useFetchGifs.js'
import './gifGrid.css'

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category)

  return (
    <>
      <h3 className='category__title'>{ category }</h3>

      {
        loading &&
        <p className='animate__animated animate__flash'>
          Loading...
        </p>
      }

      <div className='card__grid'>
        {
          images.map(img => (
            <GifGridItem
              key={ img.id }
              { ...img }
            />
          ))
        }
      </div>
    </>
  )
}

export default GifGrid
