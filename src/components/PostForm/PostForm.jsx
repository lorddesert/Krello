import React, { Component } from 'react';

import './PostForm.css';

class PostForm extends Component {

  componentDidMount() {
    this.props.show();
  }

  title = React.createRef();
  desc = React.createRef();

  addItem = (e) => {
    e.persist();
    let { items } = this.props;
    // items.push({
    //   itemTitle: this.title.current.value,
    //   itemDescription: this.desc.current.value
    // });
    this.props.db.push().set({
      itemTitle: this.title.current.value,
      itemDescription: this.desc.current.value
    });
    this.props.close();
  }

  render() {
    return (
        <div className='PostForm'>
          <div className='PostForm-content'>
            <div className='Form'>
              <div className='PostForm-label'>
                <h2>Add Item</h2>
                </div>
              <div className='PostForm-label'>
                <label>
                  <input type='text' placeholder='Write a title' name='title' ref={this.title} />
                </label>
              </div>
              <div className='PostForm-label'>
                <label>
                  {/* <input type='text' placeholder='Write a description' name='description' ref={this.desc} /> */}
                  <textarea placeholder='Write a description' ref={this.desc} name='description' id="" cols="25" rows="5"></textarea>
                </label>
              </div>
              <div className='PostForm-label'>
                <label>
                  <button onClick={this.addItem}>Add Item</button>
                </label>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default PostForm;