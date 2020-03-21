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
        {props.itemInfo.body}
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
          <li>
            <div>
              <img src={plusImg} alt='plus'></img>
              <span>asdadasdasdASDAsdASDAS</span>
            </div>
          </li>
          <li>---</li>
        </ul>
      </div>
    </div>
  );
}

export default ItemInfo;