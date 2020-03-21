import React, { Component } from 'react';
// Components
import Tasks from '../Tasks/Tasks';
import Log from '../Log/Log';
import ItemInfo from '../ItemInfo/ItemInfo';

import './Body.css';

export default class Body extends Component {
  state = {
    itemInfo: {
      title: 'my title',
      body: 'one description'
    }
  }

  changeState = (item) => {
    let {title, body} = item[0];
    this.setState({
      itemInfo : {
        title, body
      }
    })
    console.log(this.state);
  }

  render(){
    return (
    <div className='Body'>
      <div className='Body-content'>
        <div className='Body-log'>
          <Log changeState={this.changeState} />
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