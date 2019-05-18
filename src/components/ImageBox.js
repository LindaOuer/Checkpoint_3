import React, { Component } from "react";

class ImageBox extends Component {
  render() {
    return (
      <div className="imageBox">
        <img src={this.props.image} alt="" />
        <p className="imageTitle">{this.props.title}</p>
      </div>
    );
  }
}

export default ImageBox;
