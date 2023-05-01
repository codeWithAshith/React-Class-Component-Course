import { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  state = { lat: null, lon: null, errorMessage: null };

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        if (!this.state.lat)
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

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} lon={this.state.lon} />;
    }

    return <div>Loading!</div>;
  }
}

export default App;
