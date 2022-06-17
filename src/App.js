import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import GetHeader from './GetHeader';


const App = () => {
  
  return (
  <>
    <div id='header'>
      <img src={"./assets/Logo.svg"} alt="Logo Prisca" />
      <ul className="no-dot-list">
        {Header.map(item =>{
          return (
            <GetHeader key={item.id} title={item.title} url={item.url} />
          );
        })}
      </ul>
    </div>
  
    <Hero/>
  </>
  )
}


export default App;
