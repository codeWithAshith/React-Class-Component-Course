import { Component } from "react";

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
      return (
        <div>
          <h1>Lat: {this.state.lat}</h1>
          <h1>Lon: {this.state.lon}</h1>
        </div>
      );
    }

    return <div>Loading!</div>;
  }
  
}

export default App;
