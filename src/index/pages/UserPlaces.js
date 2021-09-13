import React from 'react';
// import { useParams } from 'react-router-dom';

import PlaceList from '../components/map/PlaceList';


const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://picsum.photos/200',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },

    creator: 'u1',
  },
];


const UserPlaces = () => {
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === 'u1');
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
