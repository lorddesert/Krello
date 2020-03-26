import React, { Component } from 'react';
import './Log.css';
import firebase from 'firebase';

import itemIcon from './resources/itemIcon.png';

import { DB_CONFIG } from '../../config/config';

export default class Log extends Component {

  state = {
    items: []
  }

  inputItem = React.createRef();

  app = firebase.initializeApp(DB_CONFIG);
  db = this.app.database().ref().child('items');

  handleClick = e => {
    e.persist();
    if(e.target.childNodes.length > 1) {
      let item = this.state.items.filter(item => item.itemTitle == e.target.childNodes[1].textContent);
      console.log(item);
      this.props.changeState(item);
    }
    else {
      let item = this.state.items.filter(item => item.itemTitle == e.target.childNodes[0].textContent);
      console.log(item);
      this.props.changeState(item);
    }
      // this.props.changeState()

  }

  componentDidMount () {
    // Listening for an item added.
    const { items } = this.state
    this.db.on('child_added', snap => {
      items.push({
        itemId: snap.key,
        itemTitle: snap.val().itemTitle,
        itemDescription: snap.val().itemDescription
        })
        this.setState({items});
    });
    //Listening for an change on an item/child of the item.
    this.db.on('child_changed', snap => {
      for(let i = 0; i < items.length; i++)
        if(items[i].itemId == snap.key) {
          items[i].itemTitle = snap.val().itemTitle;
          items[i].itemDescription = snap.val().itemDescription;
        }

      this.setState({items});
      });
    //Listening for removed items
      this.db.on('child_removed', snap => {
        for(let i = 0; i < items.length; i++)
          if(items[i].itemId == snap.key) {
            items.splice(i, 1);
            this.setState({items});
          }
      });
  }

  addItem = () => {
    this.props.toggleShow();
  }

  render() {
    return (
      <div className="Log">
        <div className='Log-container'>
          <div className='Log-items'>
              <ul>
                {this.state.items[0] ?
                  this.state.items.map((item, i) => (
                    <div className='Log-item' key={`item-${i}`}>
                      <li onClick={this.handleClick}>
                        <div className="Log-item-id" >
                          <div>
                            <img src={itemIcon} width='15px'></img>
                          </div>
                          <span>{i+1}</span>
                        </div>
                        <div className="Log-item-title">
                        <span>{item.itemTitle}</span>
                        </div>
                      </li>
                    </div>
                  ))
                  :
                  <div>
                    <span style={{fontSize: '1.3em', letterSpacing: '.1em'}}>Cargando...</span>
                  </div>
                }
              <div className='Log-addItem' style={{display:'flex'}}>
                <div style={{padding:'.5em', display: 'flex', flex: '1'}}>
                  <button
                    className='addItem-btn'
                    onClick={this.addItem}
                  >
                    Add task
                  </button>
                </div>
                {/* <div className='addItem-input'>
                  <input type='text' placeholder='New Item' ref={this.inputItem} autoFocus></input>
                </div>
                <div className='addItem-btn'>
                  <button onClick={this.addItem}>Add</button>
                </div> */}
              </div>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}