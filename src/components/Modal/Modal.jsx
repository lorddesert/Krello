import React from 'react';

import './Modal.css'

const Modal = props => {
  return (
    <div className='Modal'>
      {props.showModal &&
        <div className='Modal-overlay' onClick={props.close}>
        </div>
      }
          <div className='Modal-wrapper' id='modal'>
            <span>Hello World</span>
          </div>
    </div>
  );
}

export default Modal;