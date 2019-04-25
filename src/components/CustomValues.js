import React, { Component } from 'react';

class CustomValues extends Component {
  onCustomWidthChange = event => {
    this.props.onCustomWidthChange(event.target.value)
  }

  onCustomHeightChange = event => {
    this.props.onCustomHeightChange(event.target.value)
  }

  render() {
        const {
          customWidth,
          customHeight
              } = this.props
    return (

      <div>
    <div className="custom-size">
      <p>WIDTH (PX)</p>
      <p>HEIGHT (PX)</p>
    </div>

    <div className="custom-size value">
      <input
        type="number"
        className="input-number"
        id="width"
        onChange={this.onCustomWidthChange}
        name="width"
        value={customWidth}
      />
      <input
        type="number"
        className="input-number"
        id="heigth"
        onChange={this.onCustomHeightChange}
        name="height"
        value={customHeight}
      />
    </div>
    </div>


    );
  }
}

export default CustomValues;
