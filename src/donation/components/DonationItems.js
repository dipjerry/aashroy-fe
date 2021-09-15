import React from 'react';
import {Link} from 'react-router-dom';
import './DonationItems.css';

import Avatar from '../../shared/components/UIelements/Avatar';
import Cards from '../../shared/components/UIelements/Cards';
const DonationItems = (props) =>{
  return (
    <li className="donation-item">
      <Cards className="donation-item__content">
        <Link to={`/${props.id}/places`}>

          <div className="donation-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="donation-item__info">
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

export default DonationItems
;
