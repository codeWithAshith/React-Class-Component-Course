import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, lon: null, errorMessage: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) =>
        this.setState({
          errorMessage: err.message,
        })
    );

    return (
      <div>
        <div>
          <h1>Lat: {this.state.lat}</h1>
          <h1>Lon: {this.state.lon}</h1>
        </div>
        <h1>Error: {this.state.errorMessage}</h1>
      </div>
    );
  }
}

export default App;
