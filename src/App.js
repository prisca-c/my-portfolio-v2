import React from 'react';
import './stylesheets/App.css';

import { ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import GetHeader from './Header';
import Hero from './Hero';
import Tabs from './Tabs';
import Setup from './Setup';


const App = () => {
  
  return (
    <> 
      <ThemeProvider breakpoints={['lg', 'md', 'sm', 'xs']} >

        <GetHeader/>
          <Hero/>
          <Tabs/>
          <Setup/>

      </ThemeProvider> 
     
    </>
  )
}


export default App;
