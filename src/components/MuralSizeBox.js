import React, { Component } from 'react';
import CustomImg from '../static/images/custom-size-icon.svg';

class MuralSizeBox extends Component {

  render() {
    // recibo las propiedades desde el componente form a traves de props para utilizarlas y mostralas en cada box
    const { selected, mySize, name, text, proportion } = this.props
    return (
      <span>
        <input type="radio" name="mural-size" onChange={this.handleChange} id={mySize} />
        {/* si la propiedad selected es true (booleano que llega por props) entonces aplicara una clase css con ese nombre, sino no hará nada */}
        <label className={'mural-size-item ' + (selected ? 'selected' : '')} htmlFor={mySize}>
        <div className={'mural-size ' + mySize}>
        {/* si el box seleccionado es "custom" pintará un box especifico con una imagen diferente al resto, sino mostrará
      el texto de cada box */}
        { mySize === 'custom'
              ? <img src={CustomImg} alt="arrow icon"/>
              : <p>{text}</p>}
            </div>
            <p className="name">{name}</p>
            <span>{proportion}</span>
          </label>
      </span>
    );
  }

  // función que recibe a través de props el size del estado y con el evento onChange lo devuelve para poder cambiar su valor
  handleChange = () => {
    const { mySize } = this.props;
    this.props.onChange(mySize);
  }


}

export default MuralSizeBox;



