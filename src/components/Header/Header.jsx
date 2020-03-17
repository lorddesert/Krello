import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <div className='Header-container'>
        <div className='Header-title'>
          <h1>Date It</h1>
        </div>
        <div className='Header-sections'>
          <ul>
            <li>Tablero</li>
            <li>Opciones</li>
            <li>Login?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;