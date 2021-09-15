import React from 'react';
import DonationItems from './DonationItems';

import './DonationList.css';

const DonationList = (props) =>{
  if (props.items.length==0) {
    return (
      <div className="Center">
        <h2>No user found</h2>
      </div>
    );
  }

  return (
    <ul className="donation-list">
      {props.items.map((donation) => (
        <DonationItems
          key={donation.key}
          id={donation.id}
          image={donation.image}
          name={donation.name}
          placeCount={donation.places}
        />
      ))}
    </ul>
  );
};

export default DonationList
;
