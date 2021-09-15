import React from 'react';
import HomelessItems from './HomelessItems';

import './HomelessList.css';

const HomelessList = (props) =>{
  if (props.items.length==0) {
    return (
      <div className="Center">
        <h2>No Homeless found</h2>
      </div>
    );
  }

  return (
    <table className="Homeless-table">
      <thead>
        <th>Image</th>
        <th>Name</th>
        <th>Address</th>
        <th>Locate Shelter</th>
      </thead>
      <tbody>
        {props.items.map((Homeless) => (
          <HomelessItems
            key={Homeless.key}
            id={Homeless.id}
            image={Homeless.image}
            name={Homeless.name}
            shelterAddress={Homeless.shelterAddress}
            shelterCoordinate={Homeless.shelterCoordinate}
          />
        ))}
      </tbody>
    </table>
  );
};

export default HomelessList
;
