import React from "react";
import Tooltip from "./Tooltip";
import ReactDOM from "react-dom";
import SelectPosition from "./SelectPosition";

// var array = ["left", "right", "top", "bottom"];
var calledPositionValue = "left";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
      coordinatesOfButton: null,
      direction: 'left',
    };
  }


  handleCallback(positionValue) {
    calledPositionValue = positionValue;
  }

  handleOnMouseOver() {
    let coordinatesButton = ReactDOM.findDOMNode(this);
    // array[Math.floor(Math.random() * array.length)]
    this.setState({
      showTooltip: true,
      coordinatesOfButton: coordinatesButton,
      direction: calledPositionValue,
    });
  }
  handleOnMouseLeave() {
    this.setState({
      showTooltip: false,
    });
  }



  render() {
    return (
      <div style={{ height: 500, width: 500 }}>
        <SelectPosition positionCallback={this.handleCallback} />
        <button
          onMouseOver={this.handleOnMouseOver.bind(this)}
          onMouseLeave={this.handleOnMouseLeave.bind(this)}
          style={{
            borderRadius: 25,
            border: '2px solid #73AD21',
            height: 70,
            width: 200,
            backgroundColor: "white",
            marginTop: 200,
            fontSize: "large",
          }}
        >

          Press
          {this.state.showTooltip === true ? (
            <Tooltip
              coordinatesOfButton={this.state.coordinatesOfButton}
              direction={this.state.direction}
            />
          ) : null}
        </button>
      </div>
    );
  }
}

export default Button;
