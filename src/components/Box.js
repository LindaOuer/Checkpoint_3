import React, { Component } from "react";

const colors = ["#daecf3", "#fe424d", "#1aa6b7", "#022d41"];
const btcolors = ["#7ca9ba", "#fe424d", "#1aa6b7", "#022d41"];
const txcolors = ["#878787", "#ffffff", "#ffffff", "#ffffff"];

class Box extends Component {
  render() {
    let pos = this.props.pos;
    return (
      <div className="Box" style={{ backgroundColor: colors[pos] }}>
        <p className="Box-Title" style={{ color: txcolors[pos] }}>
          {this.props.name}
        </p>
        <hr width="15%" style={{ color: txcolors[pos] }} />
        <div className="Box-Content">
          <p style={{ color: txcolors[pos] }}>{this.props.content}</p>
          <button style={{ color: btcolors[pos] }}>En savoir plus</button>
        </div>
      </div>
    );
  }
}

export default Box;
