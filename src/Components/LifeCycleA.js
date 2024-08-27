import { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Clark A",
    };
    console.log("contructorA");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromPropsA");
    return null;
  }

  componentDidMount() {
    console.log("compoentDidMountA");
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {console.log("renderA")}
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
