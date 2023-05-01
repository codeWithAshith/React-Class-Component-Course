import { Component } from "react";
import SearchBar from "./SearchBar";

class ImagesApp extends Component {
  state = { term: "" };

  handleInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          handleSubmit={this.handleSubmit}
          term={this.state.term}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default ImagesApp;
