import React, { Component } from "react";

export class RenderPCount extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

export default RenderPCount;
