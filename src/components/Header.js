import React from 'react'

function Header( {handleModal} ) {
  return (
    <header className="header">
      <div className="explanation">
        <h4 className='gray-text'>gray: read</h4>
        <h4 className="white-text">white: not read yet</h4>
      </div>
        <h1>Book List</h1>
        <button className="add-book" onClick={handleModal}>Add New Book</button>
    </header>
  )
}

export default Header