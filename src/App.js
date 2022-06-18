import React from 'react';
import './stylesheets/App.css';

import { ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import GetHeader from './Header';
import Hero from './Hero';


const App = () => {
  
  return (
    <> 
      <ThemeProvider breakpoints={['lg', 'md', 'sm', 'xs']} >

        <GetHeader/>

          <Hero/>

      </ThemeProvider> 
     
    </>
  )
}


export default App;
