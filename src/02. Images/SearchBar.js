import { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.props.handleSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search"
              value={this.props.term}
              onChange={this.props.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
