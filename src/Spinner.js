import { Component } from "react";

class Spinner extends Component {
  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">Loading...</div>
      </div>
    );
  }
}

export default Spinner;
