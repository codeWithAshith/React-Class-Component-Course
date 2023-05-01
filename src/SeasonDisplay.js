import { Component } from "react";

class SeasonDisplay extends Component {
  getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? "Summer" : "Winter";
    } else {
      return lat > 0 ? "Winter" : "Summer";
    }
  };
  render() {
    return (
      <div>
        <h1>Display Season</h1>
        <h2>{this.getSeason(this.props.lat, this.props.month)}</h2>
      </div>
    );
  }
}

export default SeasonDisplay;
