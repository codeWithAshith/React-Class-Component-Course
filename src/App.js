import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, lon: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => console.log(err)
    );

    return (
      <div>
        <h1>Lat: {this.state.lat}</h1>
        <h1>Lon: {this.state.lon}</h1>
      </div>
    );
  }
}

export default App;
