import { Component } from "react";

class SeasonDisplay extends Component {
  render() {
    return (
      <div>
        <h1>Lat: {this.props.lat}</h1>
        <h1>Lon: {this.props.lon}</h1>
      </div>
    );
  }
}

export default SeasonDisplay;
