import React from 'react'
import './index.css'
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Card from './Card';

function App(){
  return <div>
    <Header />
    <Footer />
    <Note />
    <Card 
    name="Joe Smith"
    img=""
    />
  </div>
};

export default App;