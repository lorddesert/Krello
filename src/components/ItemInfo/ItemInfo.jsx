import React from 'react';

import plusImg from '../../styles/images/plus.png';

import './ItemInfo.css';

const ItemInfo = props => {
  return (
    <div className="ItemInfo">
      <div className="ItemInfo-title">
        {props.itemInfo.title}
      </div>
      <div className="ItemInfo-description">
        {props.itemInfo.description ? props.itemInfo.description : <div>nada</div>}
      </div>
      <div className="ItemInfo-progress">
        <ul>
          <li>
            {/*
              If the item is progress -> '+'
              ''          '' comment -> '*' or ?

            */

            }
          </li>
          <li className='progress-item'>
            <div style={{display: 'flex', alignItems: 'center'}} >
              <img src={plusImg} alt='plus'></img>
              <span>Use justify content: center</span>
            </div>
          </li>
          <li className='progress-item'>
            <div>
              <img src={plusImg} alt='plus'></img>
              <span>Paquete de fideos.</span>
            </div>
          </li>
          <li className='progress-item'>
            <div>
              <img src={plusImg} alt='plus'></img>
              <span>Pan?</span>
            </div>
          </li>
          <li className='progress-item'>
            <div>
              <img src={plusImg} alt='plus'></img>
              <span>Lata de tomato-</span>
            </div>
          </li>
          <li className='progress-item'>
            <div>
              <img src={plusImg} alt='plus'></img>
              <span>Harina?</span>
            </div>
          </li>
          <li className='progress-item'>
            <div>
              <img src={plusImg} alt='plus'></img>
              <span>Salchicha x6</span>
            </div>
          </li>
          <li className='progress-item'>
            <div>
              <img src={plusImg} alt='plus'></img>
              <span></span>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default ItemInfo;