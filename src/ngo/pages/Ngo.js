import React from 'react';
import NgoList from '../components/NgoList';

const Ngo = () => {
  const NGO = [
    {
      id: 'u1',
      name: 'Ngo1',
      image: 'https://picsum.photos/200',
      places: 3,
    },
    {
      id: 'u2',
      name: 'Ngo2',
      image: 'https://picsum.photos/200',
      places: 4,
    },
    {
      id: 'u3',
      name: 'Ngo3',
      image: 'https://picsum.photos/200',
      places: 4,
    },
  ];

  return <NgoList items={NGO}/>;
};

export default Ngo
;
