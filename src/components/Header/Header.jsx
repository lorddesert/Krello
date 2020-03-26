import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <div className='Header-container'>
        <div className='Header-title'>
          <h1><a href='#'>Date It</a></h1>
        </div>
        <div className='Header-sections'>
          <ul>
            <li>
              <div>
                Account
              </div>
            </li>
            <li>
              <div>
                Calendar
              </div>
            </li>
            <li>
              <div>
                About
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;