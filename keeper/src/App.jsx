import React from 'react'
import './index.css'
import Header from './Header';
import Footer from './Footer';
import { createNote } from './CreateNote';
import { notes } from './Notes';

function App(){
  return <div>
    <Header />
    <Footer />
    {notes.map(createNote)}

  </div>
};

export default App;