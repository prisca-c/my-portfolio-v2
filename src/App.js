import React from 'react';
import './App.css';

import GetHeader from './Header';
import Hero from './Hero';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  
  return (
    <>    

      <GetHeader/>

      <main>
        <Hero/>
      </main>  
    </>
  )
}


export default App;
