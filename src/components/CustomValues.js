import React, { Component } from 'react';

class CustomValues extends Component {
  // recibo a través de props el valor de customWidth y lo envío de vuelta al form para que sea seteado en el estado
  onCustomWidthChange = event => {
    this.props.onCustomWidthChange(event.target.value)
  }

  // recibo a través de props el valor de customHeight y lo envío de vuelta al form para que sea seteado en el estado
  onCustomHeightChange = event => {
    this.props.onCustomHeightChange(event.target.value)
  }

  render() {
    // recibo las propiedades desde el componente form a traves de props para utilizarlas y mostralas en el value de cada input
        const {
          customWidth,
          customHeight
              } = this.props
    return (

      <div>
      {/* div con los titulos de cada input */}
    <div className="custom-size">
      <p>WIDTH (PX)</p>
      <p>HEIGHT (PX)</p>
    </div>

      {/* inputs con sus propiedades entre las que destacan la función onChange que permite cambiar el valor de cada input y el value con el valor
      recibido a través de props en las variables declaradas arriba */}
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
