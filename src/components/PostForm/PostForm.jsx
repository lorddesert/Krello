import React, { Component } from 'react';

import './PostForm.css';

class PostForm extends Component {
  componentDidMount() {
    this.props.show();
  }
  msg = () => {
    alert('asdasd');
  }
  render() {
    return (
        <div className='PostForm'>
          <div className='PostForm-content'>
            <div className='Form'>
              <div className='PostForm-label'>
                <label >
                  <input type='text' placeholder='Write a title' name='title' />
                </label>
              </div>
              <div className='PostForm-label'>
                <label >
                  <input type='text' placeholder='Write a description' name='description' />
                </label>
              </div>
              <div className='PostForm-label'>
                <label>
                  <button onClick={this.props.addItem}>Add Item</button>
                </label>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default PostForm;