import React from 'react';
import './App.css';

// Compoenents
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';

const App = () => {
  return (
    <div className='App'>
      <div className='App-container'>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;