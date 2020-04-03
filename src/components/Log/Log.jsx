import React, { Component } from 'react';

import './Log.css';

import LogItem from '../LogItem/LogItem';

export default class Log extends Component {

  componentDidMount () {
    // document.addEventListener('mouseover', e => {
    //   // console.log(e.target.parentNode.__reactInternalInstance$trvspwv2y3.key);
    //   console.log(e.target.parentNode);
    // })
    // let newLogItems = logItems.map((item) => item);
    const { items } = this.props;
    this.props.db.on('child_added', snap => {
      items.push({
        itemId: snap.key,
        itemTitle: snap.val().itemTitle,
        itemDescription: snap.val().itemDescription
        })
        this.props.setItems(items);
      });
    //Listening for an change on an item/child of the item.
    this.props.db.on('child_changed', snap => {
      for(let i = 0; i < items.length; i++)
        if(items[i].itemId == snap.key) {
          items[i].itemTitle = snap.val().itemTitle;
          items[i].itemDescription = snap.val().itemDescription;
        }
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

  /* This can be deleted, and put the function in the onClick */
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
                    this.props.items.map((item, i) =>
                    <LogItem
                      db={this.props.db}
                      item={item}
                      i={i}
                      key={`item-${i}`}
                      changeState={this.props.changeState}
                      items={this.props.items}
                      removeItem={this.props.removeItem}
                    />)
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
              </div>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}