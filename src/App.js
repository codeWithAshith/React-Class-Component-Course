import { Component } from "react";

class App extends Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return (
      <div>
        <h1> Hi there</h1>
      </div>
    );
  }
}

export default App;
