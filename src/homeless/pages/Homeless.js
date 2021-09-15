import React from 'react';
import HomelessList from '../components/HomelessList';

const Homelesss = () => {
  const Homeless = [
    {
      id: 'h1',
      name: 'Homeless 11',
      image: 'https://picsum.photos/200',
      shelterAddress: 'Guwahati',
      shelterCoordinate: '23332,23432432',
    },
    {
      id: 'h2',
      name: 'Homeless 11',
      image: 'https://picsum.photos/200',
      shelterAddress: 'Guwahati',
      shelterCoordinate: '23332,23432432',
    },
  ];

  return <React.Fragment>
    <h2>Homeless Person Near you</h2>
    <HomelessList items={Homeless}/></React.Fragment>;
};

export default Homelesss
;
