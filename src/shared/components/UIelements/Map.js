import React, {useRef, useEffect} from 'react';
import './Map.css';

const Map = (props) => {
  const mapRef = useRef();
  const {center, zoom} = props;
  // const [cordinates , setCordinates] = React.useState({ lat: -25.363, lng: 131.044 });

  // useEffect(() => {
  //     setCordinates(cord);
  //  }, [props.center])

  useEffect(()=>{
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            map.setCenter(pos);
            new window.google.maps.Marker({
              position: pos,
              map: map,
              icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
            });
          },
      )
      ;
    }

    new window.google.maps.Marker({
      position: {lat: 26.161808, lng: 91.799197},
      map: map,
    });
    new window.google.maps.Marker({

      position: {lat: 26.162297, lng: 91.799434},
      map: map,
    });
    new window.google.maps.Marker({

      position: {lat: 26.172297, lng: 91.798434},
      map: map,
    })

    ;
  }
  ,
  [center, zoom]);

  // }, 2000);

  return <div ref={ mapRef } className={`map ${props.className}`} style={props.style}>
  </div>;
};

export default Map;
