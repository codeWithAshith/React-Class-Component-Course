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
    const season = this.getSeason(this.props.lat, this.props.month);
    const text =
      season === "Summer" ? "Lets hit the beach" : "Burr, it is chilly";
    const icon = season === "Summer" ? "sun" : "snowflake";

    return (
      <div>
        <i className={`${icon} icon`} />
        <h2>{text}</h2>
        <i className={`${icon} icon`} />
      </div>
    );
  }
}

export default SeasonDisplay;
