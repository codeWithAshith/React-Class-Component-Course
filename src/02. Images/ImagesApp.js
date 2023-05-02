import { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

// https://unsplash.com/developers
const baseUrl = "https://api.unsplash.com/search/photos";
const clientId = "7_Ep1kcx5FU-RXd0nRkyujZMEn0sYEhZhPhFn8Ck1LU";

class ImagesApp extends Component {
  state = { term: "", images: [] };

  handleInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${baseUrl}?client_id=${clientId}&page=1&query=${this.state.term}`
      );
      const images = await response.text();

      this.setState({
        term: this.state.term,
        images: JSON.parse(images).results,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          handleSubmit={this.handleSubmit}
          term={this.state.term}
          handleInputChange={this.handleInputChange}
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default ImagesApp;
