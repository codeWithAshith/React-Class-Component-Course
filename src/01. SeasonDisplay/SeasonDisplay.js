import { Component } from "react";
import "./seasonDisplay.css";

class SeasonDisplay extends Component {
  seasonConfig = {
    summer: {
      text: "Lets hit the beach",
      iconName: "sun",
    },
    winter: {
      text: "Burr, it is chilly",
      iconName: "snowflake",
    },
  };

  getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat > 0 ? "winter" : "summer";
    }
  };

  render() {
    const season = this.getSeason(this.props.lat, this.props.month);
    const { text, iconName } = this.seasonConfig[season];

    return (
      <div className={`season-display ${season}`}>
        <i className={`massive ${iconName} icon left-icon`} />
        <h2>{text}</h2>
        <i className={`massive ${iconName} icon right-icon`} />
      </div>
    );
  }
}

export default SeasonDisplay;
