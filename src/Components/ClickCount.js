import { Component } from "react";
import UpdatedComp from "./Hoc1Count";

class ClickCount extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          Clicked {this.props.name} {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComp(ClickCount, 5);
