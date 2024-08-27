import { Component } from "react";
import UpdatedComp from "./Hoc1Count";

class HoverCount extends Component {
  render() {
    return (
      <div onMouseOver={this.props.incrementCount}>
        Hover {this.props.count} times
      </div>
    );
  }
}

export default UpdatedComp(HoverCount, 10);
