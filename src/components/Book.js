import React from 'react';
import DeleteButton from './DeleteButton';
import ReadButton from './ReadButton';

function Book() {
  return (
    <div className='book'>
      <p>Name</p>
      <p>Author</p>
      <p>Page Count</p>
      <div className="button-area">
      <ReadButton />
      <DeleteButton />
      </div>
    </div>
  )
}

export default Book