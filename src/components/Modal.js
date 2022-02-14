import React from 'react'

function Modal( { handleModal }) {
  return (
    <div className="modal-bg">
        <div className='modal'>
            <form className='modal-form'>
                <div className="title-form">
                    <label htmlFor="Book-Title">Book Title</label>
                    <input type="text" />
                </div>
                <div className="author-form">
                    <label htmlFor="Book-Author">Book Author</label>
                    <input type="text" />
                </div>
                <div className="page-count-form">
                    <label htmlFor="page-count">Page Count</label>
                    <input type="text" />
                </div>
            </form>
            <button className="close-modal" onClick={handleModal}>X</button>
        </div>
    </div>
  )
}

export default Modal