import React from 'react';
import { useState } from 'react';
import BookTitleForm from './forms/BookTitleForm';
import AuthorForm from './forms/AuthorForm';
import PageCountForm from './forms/PageCountForm';

function Modal( { handleModal, handleSubmit }) {

    // get real time input value as piece of state.
    // check if all values are not blank
    // if all values are valid. create new object with values


    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [pageCount, setPageCount] = useState("")


    function updateTitle(e) {
        setTitle(e.currentTarget.value);
    }

    function updateAuthor(e) {
        setAuthor(e.currentTarget.value);
    }

    function updatePageCount(e) {
        setPageCount(e.currentTarget.value);
    }

  return (
    <div className="modal-bg">
        <div className='modal'>
            <form className="modal-form">
                <label htmlFor="Book-Title">Book Ttile</label>
                <input type="text" />
                <label htmlFor="Book-Author">Book Author</label>
                <input type="text" />
                <label htmlFor="page-count">Page Count</label>
                <input type="text"/>
            </form>
            <button className="close-modal" onClick={handleModal}>X</button>
        </div>
    </div>
  )
}

export default Modal