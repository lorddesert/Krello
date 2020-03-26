import React, { Component } from 'react';
// Components
import Tasks from '../Tasks/Tasks';
import Log from '../Log/Log';
import ItemInfo from '../ItemInfo/ItemInfo';
import Modal from '../Modal/Modal';

import './Body.css';

export default class Body extends Component {
  state = {
    itemInfo: {
      title: 'my title',
      description: 'one description'
    },
    showModal: false
  }

  changeState = (item) => {
    let { itemTitle, itemDescription } = item[0];
    this.setState({
      itemInfo : {
        title: itemTitle,
        description: itemDescription
      }
    })
  }

  showModal = () => {
    const modal = document.getElementById('modal');
    this.setState((state) => ({
      showModal: !state.showModal
    }));
    modal.style.opacity = '1';
    modal.style.transform = 'translateY(0)';
  }

  render(){
    return (
    <div className='Body'>
      <div className='Body-content'>
        <Modal close={this.closeModal} showModal={this.state.showModal} />
        <div className='Body-log'>
          <Log changeState={this.changeState} toggleShow={this.showModal}  />
        </div>
        <div className='Body-itemInfo'>
          <ItemInfo itemInfo={this.state.itemInfo} />
        </div>
        {/* <Tasks /> */}
      </div>
    </div>
    );
  }
}