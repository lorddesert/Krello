import React, { Component } from 'react';

import PostForm from '../PostForm/PostForm';

import './Modal.css'

class Modal extends Component {

  render () {
    return (
      <div className='Modal'>
        <div className='Modal-overlay' onClick={this.props.close}>
        </div>
          <div className='Modal-wrapper' id='modal'>
            <div className="Modal-form">
              <PostForm
                show={this.props.showModal}
                items={this.props.items}
                setItems={this.props.setItems}
                db={this.props.db}
                close={this.props.close}
              />
            </div>
          </div>
      </div>
    );
  }
}

export default Modal;