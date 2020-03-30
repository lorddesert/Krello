import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-container'>
        <div className='Footer-title'>
          <h1>Date It</h1>
        </div>
          <div className='Social-credits'>
            Develop by lorddesert,
            iconos diseñados por <a href="https://www.flaticon.es/autores/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
          </div>
        {/* <div className='Social'>
          <div className='Social-Links'>
            <ul>
              <li>Github</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;