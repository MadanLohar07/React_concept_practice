import { Component } from "react";

class ClassConditional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // ============If/else method==============

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome, User</div>;
    // } else {
    //   return <div>Welcome, Guest</div>;
    // }

    // ============ element variable method =============

    // let Message;

    // if (this.state.isLoggedIn) {
    //   Message = <div>Welcome, Dear User</div>;
    // } else {
    //   Message = <div>Welcome, Guest</div>;
    // }

    // return <h1>Hello</h1>;
    // return <div>{Message}</div>;

    // ============ Ternary operator method ====================

    // return <div>Welcome, {this.state.isLoggedIn ? "User3" : "Guest3"}</div>;

    // ============ short circuiting method ====================

    return <div>Welcome, {this.state.isLoggedIn && "User4"}</div>;
  }
}

export default ClassConditional;
