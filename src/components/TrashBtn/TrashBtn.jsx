import React from 'react'
import PropTypes from 'prop-types'

const TrashBtn = ({ setCategory }) => {
  const removeCategory = () => {
    setCategory('')
  }

  return (
    <button
      type='button'
      className='clean__gifs-btn'
      onClick={removeCategory}
    >
      Clean gifs
      <ion-icon
        name="trash-outline"
        id="trash__icon"
      >
      </ion-icon>
    </button>
  )
}

TrashBtn.propTypes = {
  setCategory: PropTypes.func.isRequired,
}

export default TrashBtn
