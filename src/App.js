import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import Modal from './components/Modal';


function App() {

  // open and close modal on click 
  // create piece of state that toggles when clicking add book and/or close modal button

  const [openModal, setOpenModal] = useState(false);

  function toggleModal() {
    openModal === false ? setOpenModal(true) : setOpenModal(false);
    console.log(openModal);
  }

  function formSubmit() {
    console.log("submitted")
  }

  return (
    <div className="container">
      {openModal === true ? (
        <>
        <Modal handleModal={toggleModal} handleSubmit={formSubmit}/>
        <Header handleModal={toggleModal}/>
        <BookList />
        </>
      ) : (
        <>
        <Header handleModal={toggleModal} />
        <BookList />
        </>
      )}
    </div>
  )
}

export default App