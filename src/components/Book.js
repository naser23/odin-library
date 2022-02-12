import React from 'react'

function Book() {
  return (
    <div className='book'>
      <p>Name</p>
      <p>Author</p>
      <p>Page Count</p>
      <div className="button-area">
      <button>Read</button>
      <button>Delete</button>
      </div>
    </div>
  )
}

export default Book