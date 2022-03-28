import React from 'react';
import './selectposition.css';


class SelectPosition extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
    this.props.positionCallback(event.target.value);
    }
  
    render() {
      return (
        <form>
        <label className='position'>
          Position:
          <select  onChange={this.handleChange}>
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </select>
        </label>
      </form>
      );
    }
  }


export default SelectPosition