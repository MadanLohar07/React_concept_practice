import { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Clark B",
    };
    console.log("contructorB");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromPropsB");
    return null;
  }

  componentDidMount() {
    console.log("compoentDidMountB");
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {console.log("renderB")}
      </div>
    );
  }
}

export default LifeCycleB;
