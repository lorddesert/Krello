import React, { Component } from 'react';

import deleteImg from './resources/delete.png'
import itemIcon from './resources/itemIcon.png';
import './LogItem.css';

class LogItem extends Component {

  state = {
    showDel: false
  }

  inputItem = React.createRef();
  title = React.createRef();
  titleContainer = React.createRef();

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

  componentDidMount() {
    console.log(this.title.current.clientHeight);
    if(this.title.current.clientHeight > 32) {
      console.log('lo supero');
      console.log(this.titleContainer.current);
      this.titleContainer.current.style.alignItems = 'start'
      
    }
    // document.addEventListener('mouseover', e => {
    //   if(e.target.parentNode.className == 'Log-item') {
    //     this.setState(state => ({
    //       showDel: !state.showDel
    //     }));
    //   }
    //   else
    //     this.setState({showDel: false})
    // })
  }
  // componentDidMount() {
  //   // document.addEventListener('mouseover', (e) => {
  //   //   // console.log(e)
  //   //  if(e.target.parentNode.className == 'Log-item') {
  //   //   //  this.setState({showDel: true})
  //   //   console.log(1);
  //   //  }
  //   // })
  //   // const logItems = document.getElementsByClassName('Log-item');
  //   // console.log(logItems)
  //   // for(let i = 0; i < logItems.length; i++) {
  //   //   console.log(logItems[i]);
  //   //   logItems[i].addEventListener('mouseover', () => {console.log('asdasd')})
  //   // }
  //   document.addEventListener('mouseover', e => {
  //     console.log(e);
  //   })
  // }
  showDel = () => {
    this.setState(state => ({
      showDel: !state.showDel
    }));
  }
  render() {
    return (
      <div className='Log-item' onMouseEnter={this.showDel} onMouseLeave={this.showDel}>
        <li onClick={this.handleClick}>
          <div className="Log-item-id" >
            <div>
            <img src={itemIcon} width='15px'></img>
            </div>
            <span>{`${this.props.i+1}`}</span>
          </div>
          <div ref={this.titleContainer} className="Log-item-title">
            <span ref={this.title}>{this.props.item.itemTitle}</span>
          </div>
          <div className='Log-item-del'>
        {this.state.showDel &&
            <div>
              <img src={deleteImg} >
              </img>
            </div>
        }
        </div>
        </li>
      </div>
    );
  }
}

export default LogItem;
