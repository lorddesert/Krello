import React, { Component } from 'react';
// Components
import Tasks from '../Tasks/Tasks';
import Log from '../Log/Log';
import ItemInfo from '../ItemInfo/ItemInfo';
import Modal from '../Modal/Modal';
import firebase from 'firebase';
import { DB_CONFIG } from '../../config/config';

import './Body.css';

export default class Body extends Component {

  state = {
    items: [],
    itemInfo: {
      title: 'my title',
      description: 'one description'
    },
    showModal: true
  }

  app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
  db = this.app.database().ref().child('items');

  changeState = (item) => {
    let { itemTitle, itemDescription } = item[0];
    this.setState({
      itemInfo : {
        title: itemTitle,
        description: itemDescription
      }
    });
  }

  toggleShow = () => {
    this.setState((state) => ({
      showModal: !state.showModal
    }));
  }

  showModal() {
    modal.style.opacity = '1';
    modal.style.transform = 'translateY(0vh)';
  }

  closeModal = () => {
    const modal = document.getElementById('modal');
    this.setState((state) => ({
      showModal: !state.showModal
    }));
    modal.style.opacity = '0';
    modal.style.transform = 'translateY(-100vh)';
  }

  setItems = (items) => {
    this.setState((state) => ({
      ...state,
      items
    }));
  }

  componentDidMount() {
    // const { items } = this.state;
    // this.db.on('child_added', snap => {
    //   items.push({
    //     itemId: snap.key,
    //     itemTitle: snap.val().itemTitle,
    //     itemDescription: snap.val().itemDescription
    //     })
    //     /* change */
    //     this.setState({items});
    // });
    // //Listening for an change on an item/child of the item.
    // this.db.on('child_changed', snap => {
    //   for(let i = 0; i < items.length; i++)
    //     if(items[i].itemId == snap.key) {
    //       items[i].itemTitle = snap.val().itemTitle;
    //       items[i].itemDescription = snap.val().itemDescription;
    //     }
    //     /* change */
    //   this.setState({items});
    //   });
    // //Listening for removed items
    //   this.db.on('child_removed', snap => {
    //     for(let i = 0; i < items.length; i++)
    //       if(items[i].itemId == snap.key) {
    //         items.splice(i, 1);
    //         this.setState({items});
    //       }
    //   });
  }
  render(){
    return (
    <div className='Body'>
      <div className='Body-content'>
        {this.state.showModal &&
          <Modal
            close={this.closeModal}
            showModal={this.showModal}
            items={this.state.items}
            setItems={this.setItems}
            db={this.db}
          />
        }
        <div className='Body-log'>
          <Log 
            changeState={this.changeState}
            toggleShow={this.toggleShow}
            db={this.db} 
            items={this.state.items}
            setItems={this.setItems}
          />
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