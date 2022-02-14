import React from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import Modal from './components/Modal';


function App() {
  return (
    <div className="container">
        <Modal />
        <Header />
        <BookList />
    </div>
  )
}

export default App