import React from 'react';
import Tasks from '../Tasks/Tasks';

import './Body.css';

const Body = () => {
  return (
    <div className='Body'>
      <div className='Body-content'>
        <Tasks />
      </div>
    </div>
  );
}

export default Body;