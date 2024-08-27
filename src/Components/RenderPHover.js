import React, { Component } from "react";

export class RenderPHover extends Component {
  render() {
    return (
      <div onMouseOver={this.props.incrementCount}>
        Hovered {this.props.count} times
      </div>
    );
  }
}

export default RenderPHover;
