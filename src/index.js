import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Tabs from './Tabs';
import GetHeader from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <GetHeader/>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/Tabs' element={<Tabs />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
