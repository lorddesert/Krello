import React, { Component } from 'react';
import './Log.css';

import itemIcon from './resources/itemIcon.png';

export default class Log extends Component {

  inputItem = React.createRef();

  handleClick = e => {
    e.persist();
    if(e.target.childNodes.length > 1) {
      let item = this.props.items.filter(item => item.itemTitle == e.target.childNodes[1].textContent);
      this.props.changeState(item);
    }
    else {
      let item = this.props.items.filter(item => item.itemTitle == e.target.childNodes[0].textContent);
      this.props.changeState(item);
    }
  }

  componentDidMount () {
    const { items } = this.props;
    this.props.db.on('child_added', snap => {
      items.push({
        itemId: snap.key,
        itemTitle: snap.val().itemTitle,
        itemDescription: snap.val().itemDescription
        })
        /* change */
        this.props.setItems(items);
      });
    //Listening for an change on an item/child of the item.
    this.props.db.on('child_changed', snap => {
      for(let i = 0; i < items.length; i++)
        if(items[i].itemId == snap.key) {
          items[i].itemTitle = snap.val().itemTitle;
          items[i].itemDescription = snap.val().itemDescription;
        }
        /* change */
        this.props.setItems(items);
      });
    //Listening for removed items
      this.props.db.on('child_removed', snap => {
        for(let i = 0; i < items.length; i++)
          if(items[i].itemId == snap.key) {
            items.splice(i, 1);
            this.props.setItems(items);
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
                {this.props.items[0] ?
                  this.props.items.map((item, i) => (
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