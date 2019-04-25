import React, { Component } from 'react';
import CustomImg from '../static/images/custom-size-icon.svg';

class Card extends Component {

  // onClickCard = () => {
  //   console.log('llegue')
  // };

  render() {
    const { selected, mySize, name, text, proportion } = this.props
    console.log(selected)
    return (
      <span>
        <input type="radio" name="mural-size" onChange={this.handleChange} id={mySize} />
        <label className={'mural-size-item ' + (selected ? 'selected' : '')} htmlFor={mySize}>
        <div className={'mural-size ' + mySize}>
        { mySize === 'custom'
              ? <img src={CustomImg} alt="arrow icon"/>
              : <p>{text}</p>}
            </div>
            <p className="p">{name}</p>
            <span>{proportion}</span>
          </label>
      </span>
    );
  }

  handleChange = () => {
    const { mySize } = this.props;
    this.props.onChange(mySize);
  }


}

export default Card;



