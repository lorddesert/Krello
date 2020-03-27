import React from 'react';

import PostForm from '../PostForm/PostForm';

import './Modal.css'

const Modal = props => {
  return (
    <div className='Modal'>
      {props.showModal &&
        <div className='Modal-overlay' onClick={props.close}>
        </div>
      }
        <div className='Modal-wrapper' id='modal' style={
          {
            width: '20vw',
            height: '20vh'
          }
        }>
          <PostForm />
        </div>
    </div>
  );
}

export default Modal;