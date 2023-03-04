import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './category.css'

const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (inputValue.trim().length > 2) {
      setCategory(inputValue)

      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} method="post">
      <div class="input__container">
        <input
          type="search"
          className='input__category'
          placeholder='Search'
          value={inputValue}
          onChange={handleInputChange}
          autoFocus
        />
        <button
          type="submit"
          className='submit__btn'
        >
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
    </form>
  )
}

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
}

export default AddCategory
