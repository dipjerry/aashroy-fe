import React from 'react';
// import Cards from '../../../shared/components/UIelements/Cards';
// import Button from '../../../shared/components/FormElements/Button';
// import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../../shared/components/UIelements/Map';
import './PlaceItem.css';

const PlaceItem = (props) => {
  // const initialPos = {
  //   lat: 10,
  //   lng: 10,
  // };
  // const [pos, setPos] = useState(initialPos);

  // if (navigator.geolocation) {
  //   navigator.geolocation.watchPosition(
  //     (position) => {
  //       setPos({
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       })
  //         console.log("ola");
  // console.log(pos);
  // console.log(props.coordinates);
  // console.log(setPos);
  // },
  // );

  return (
    <li className="place-item">
      <div className="place-item__image">
        {/* <h2>{pos.lat}</h2>
          <h2>{pos.lng}</h2> */}
        <Map center={props.coordinates} zoom={16} place={'xyz'} />
      </div>
    </li>
  );
  // }
};

export default PlaceItem;
