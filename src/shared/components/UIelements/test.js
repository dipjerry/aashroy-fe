import React from 'react';
class ChangeColor extends React.Component {
  constructor(props) {
    super(props);

    // Initializing the state
    this.state = {color: 'lightgreen'};
  }
  componentDidMount() {
    // Changing the state after 2 sec
    // from the time when the component
    // is rendered
    setTimeout(() => {
      this.setState({color: 'wheat'});
    }, 2000);
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <p
          style={{
            color: this.state.color,
            backgroundColor: 'rgba(0,0,0,0.88)',
            textAlign: 'center',
            paddingTop: 20,
            width: 400,
            height: 80,
            margin: 'auto',
          }}
        >
          {this.state.color}
          GeeksForGeeks
        </p>

      </div>
    );
  }
}
export default ChangeColor;
