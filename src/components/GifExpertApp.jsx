import React, { useState } from 'react'
import AddCategory from './Category/AddCategory.jsx'
import GifGrid from './GifGrid/GifGrid.jsx'
import TrashBtn from './TrashBtn/TrashBtn.jsx'

const GifExpertApp = () => {
  const [category, setCategory] = useState('')
  
  return (
    <>
      <div className='container'>
        <div className="title__container">
          <div className='
            animate__animated
            animate__jackInTheBox
            animate__delay-1s
          '
          >
            <a
              href="https://www.github.com/MeeL1ght"
              target='_blank'
            >
              <ion-icon
                name="logo-github"
                id="gh__logo">
              </ion-icon>
            </a>
          </div>

          <img
            src="/vite.svg"
            alt="vite"
            className='
              logo
              vite
              animate__animated
              animate__jackInTheBox
              animate__delay-1s
            '
          />

          <img
            src="/src/assets/react.svg"
            alt="React"
            className='
              logo
              react
              animate__animated
              animate__jackInTheBox
              animate__delay-1s
            '
          />

          <h1 className='app__title'>
            GifExpertApp
          </h1>
        </div>

        <div className="line"></div>

        <div className="btn__container">
          <AddCategory
            setCategory={setCategory}
          />
 
          {
            category &&
            <TrashBtn
              className='animate__animated animate__flash'
              setCategory={setCategory}
            />
          }
        </div>
      </div>

      <ul>
        <GifGrid
          key={category}
          category={category}
        />
      </ul>
    </>
  )
}

export default GifExpertApp
