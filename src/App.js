import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;