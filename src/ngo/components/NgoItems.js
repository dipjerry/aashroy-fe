import React from 'react';
import {Link} from 'react-router-dom';
import './NgoItems.css';

import Avatar from '../../shared/components/UIelements/Avatar';
import Cards from '../../shared/components/UIelements/Cards';
const NgoItems = (props) =>{
  return (
    <li className="ngo-item">
      <Cards className="ngo-item__content">
        <Link to={`/${props.id}/places`}>

          <div className="ngo-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="ngo-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount}{props.placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </div>

        </Link>
      </Cards>
    </li>
  );
};

export default NgoItems
;
