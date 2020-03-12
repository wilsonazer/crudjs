import React from 'react';
import './App.css';

import Logo from './components/templates/Logo'
import Nav from './components/templates/Nav'
import Main from './components/templates/Main'
import Footer from './components/templates/Footer'

function App() {
  return (
    <div className="App">
      <Logo/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
