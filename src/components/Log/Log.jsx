import React, { Component } from 'react';
import './Log.css';
import itemIcon from './resources/itemIcon.png'
export default class Log extends Component {

  state = {
    items: 0
  }

  handleClick = e => {
    e.persist();
    this.state.itemTitle = e;
    if(e.target.childNodes.length > 1) {
      let item = this.state.items.filter(item => item.title == e.target.childNodes[1].textContent);
      this.props.changeState(item);
    }
    else {
      let item = this.state.items.filter(item => item.title == e.target.childNodes[0].textContent);
      this.props.changeState(item);
    }
      // this.props.changeState()

  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => response.json())
      .then(json => {
        this.setState({items: json})
      })
  }
  render() {
    return (
      <div className="Log">
        <div className='Log-container'>
          <div className='Log-items'>
              <ul>
                {this.state.items ?
                  this.state.items.map(item => (
                    <div className='Log-item'>
                      <li key={`item-${item.id}`} onClick={this.handleClick}>
                        <div className="Log-item-id" >
                          <div>
                            <img src={itemIcon} width='15px'></img>
                          </div>
                          <span>{item.id}</span>
                        </div>
                        <div className="Log-item-title">
                        <span>{item.title}</span>
                        </div>
                      </li>
                    </div>
                  ))
                  :
                  <div>
                    Cargando...
                  </div>
                }
              <div className='Log-addItem'>
                <div className='addItem-input'>
                  <input type='text' placeholder='New Item'></input>
                </div>
                <div className='addItem-btn'>
                  <button>Add</button>
                </div>
              </div>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}