import React, { useState } from 'react'
import './index.css'
import Header from './Header';
import Footer from './Footer';
import CreateArea from './CreateArea';

function App(){

  return( <div>
    <Header />
    
    <CreateArea />
    

    <Footer />

  </div>
  )
};

export default App;