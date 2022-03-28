import React from "react";
import "./tooltip.css";

class ToolTip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: this.props.direction,
    };
  }


  render() {
    console.log(this.props.direction);
    console.log(this.state.direction, "***");
    if (this.state.direction === "top") {
      return (
        <div className="tooltip">
          <h1>Tool Tip</h1>
          <div></div>
        </div>
      );
    } else if (this.state.direction === "left") {
      return (
        <div className="tooltip rotateLeft">
          <h1>Tool Tip</h1>
        </div>
      );
    } else if (this.state.direction === "right") {
      return (
        <div className="tooltip rotateRight">
          <h1>Tool Tip</h1>
        </div>
      );
    } else if (this.state.direction === "bottom") {
      return (
        <div className="tooltip placeBottom">
          <h1>Tool Tip</h1>
        </div>
      );
    }
  }
}

export default ToolTip;
