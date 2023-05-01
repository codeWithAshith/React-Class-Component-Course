import { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = { lat: null, errorMessage: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        if (!this.state.lat)
          this.setState({
            lat: position.coords.latitude,
          });
      },
      (err) =>
        this.setState({
          errorMessage: err.message,
        })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} month={new Date().getMonth} />;
    }

    return <Spinner message="Please accept the location request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
