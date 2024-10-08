import React from "react";

const UpdatedComp = (OriginalComp, incrementNumber) => {
  class NewComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      return (
        <OriginalComp
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return NewComp;
};

export default UpdatedComp;
