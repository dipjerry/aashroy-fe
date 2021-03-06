import React from 'react';
import {Link} from 'react-router-dom';
import './HomelessItems.css';

import Avatar from '../../shared/components/UIelements/Avatar';
import Button from '../../shared/components/FormElements/Button';
// import Cards from '../../shared/components/UIelements/Cards';
const HomelessItems = (props) =>{
  return (

    <tr>
      <td className="Homeless-item__image">
        <Avatar image={props.image} alt={props.name} />
      </td>
      <td className="Homeless-item__name">{props.name}</td>
      <td>{props.shelterAddress}</td>
      <td><Link to={`/${props.id}/report`}>
        <Button>Locate on map</Button>
      </Link></td>
    </tr>

  );
};

export default HomelessItems
;
