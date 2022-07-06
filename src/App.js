import React from 'react';
import './stylesheets/App.css';

import { ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import GetHeader from './components/Header';
import Hero from './components/Hero';
import Tabs from './components/Tabs';
import Setup from './components/Setup';
import ContactForm from './components/ContactForm';

import ListTabs from './components/ListInfos';

const App = () => {
  return (
    <>
      <React.StrictMode>
        <ThemeProvider breakpoints={['lg', 'md', 'sm', 'xs']}>
          <GetHeader />
          <Hero />
          <Tabs Tabs={ListTabs}/>
          <Setup />
          <ContactForm />
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
};

export default App;
