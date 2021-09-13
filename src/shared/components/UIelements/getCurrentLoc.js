import React from 'react';

class getCurrentLoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    };
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            this.setState({
              latitude: pos.lat,
              longitude: pos.lng,
            });
          },
      )
      ;
    }
  }


  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
        {/* <h2>{this.state.locs}</h2> */}
        <h2>{this.state.latitude}</h2>
        <h2>{this.state.longitude}</h2>
      </div>
    );
  }
}
export default getCurrentLoc;
