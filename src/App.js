import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, lon: null, errorMessage: null };
  }

  // Lifecycle methods

  // -- ComponentDidMount
  // -- ComponentDidUpdate
  // -- ComponentWillUmmount - called for clean up

  // Other lifecycle menthods

  // -- shouldComponentUpdate
  // -- getDrivedStateFromProps
  // -- getSnapshotBeforeUpdate

  componentDidMount() {
    console.log(
      "Component loaded - called when the compoenent loads for the first time"
    );
  }

  componentDidUpdate() {
    console.log("Component updated - called when the state is updated");
  }

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

    return (
      <div>
        {this.state.lat ? (
          <div>
            <h1>Lat: {this.state.lat}</h1>
            <h1>Lon: {this.state.lon}</h1>
          </div>
        ) : (
          <h1>Error: {this.state.errorMessage}</h1>
        )}
      </div>
    );
  }
}

export default App;
