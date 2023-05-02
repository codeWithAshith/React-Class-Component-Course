import { Component } from "react";

class ImageList extends Component {
  render() {
    return (
      <div>
        {this.props.images.map((image) => {
          return <img key={image.id} src={image.urls.regular} alt={image.description} />;
        })}
      </div>
    );
  }
}

export default ImageList;
