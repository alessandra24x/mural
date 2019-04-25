import React, { Component } from 'react';
import MuralSizeBox from './MuralSizeBox';
import CustomValues from './CustomValues';

// Defino un array de objetos que va a contener los datos de cada uno de los elementos (size_boxes)
let size_boxes = [
  {
    size: 'default',
    name: 'Default',
    text: '1x',
    proportion: '9216 x 6237 px'
  },
  {
    size: 'horizontal-2x',
    name: 'Horizontal-2x',
    text: '2x',
    proportion: '18432 x 6237 px'
  },
  {
    size: 'horizontal-3x',
    name: 'Horizontal-3x',
    text: '3x',
    proportion: '27648 x 6237 px'
  },
  {
    size: 'vertical-2x',
    name: 'Vertical-2x',
    text: '2h',
    proportion: '9216 x 12474 px'
  },
  {
    size: 'vertical-3x',
    name: 'Vertical-3x',
    text: '3h',
    proportion: '9216 x 18711 px'
  },
  {
    size: 'custom',
    name: 'Custom Size',
    text: '',
    proportion: ''
  }

];

// Creo la clase que extiende de componente con la estrcuctura standar donde defino el estado de mi aplicación
// en dicho estado guardo el size que va a estar variando por cada elemento seleccionado.
// tambien guardo los valores que tendrá el box custom tanto su width como height, asi se validan posteriormente
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      customWidth: 9216,
      customHeight: 6237
    }
  }

  // recibo el valor de la funcion handleChange (en este caso el size que es lo que necesito para cambiar mi estado)
  // una vez que selecciono algun box en particular, de esta manera puedo realizar una funcionalidad distinta para cada uno
  onSizeChange = (size) => {
    this.setState({
      size: size
    });
  };

  // seteo el valor en el estado de customWidth cada vez que el usuario ingresa un cambio en el input
  onCustomWidthChange = (customWidth) => {
    this.setState({
      customWidth: customWidth
    });
  };

  // seteo el valor en el estado de customHeight cada vez que el usuario ingresa un cambio en el input
  onCustomHeightChange = (customHeight) => {
    this.setState({
      customHeight: customHeight
    });
  };

  // con esta función evito que se produzca el efecto secundario del evento predeterminado. En este caso el evento submit
  // recargaría la página al clickear en el botón que tiene ese evento, esto evita que eso suceda.
  onSubmit = (event) => {
    event.preventDefault()
  }

  // renderizo todo lo que deseo mostrar
  render() {
    // guardo cada una de las propiedades de mi estado en variables para que sea mas fácil de utilizar
    const { size, customWidth, customHeight} = this.state
    return (
      // etiqueta form con el evento onSubmit que llama a la función onSubmit definida arriba
      <form onSubmit={this.onSubmit}>
      <div className="title">
        <p>MURAL</p>
        <h1>UI CHALLENGE</h1>
        <hr></hr>
      </div>
      <p className="mural-size-name">MURAL SIZE</p>
      <div className="mural-size-selector">
      {/* con map recorro cada uno de los elementos de mi array y los retorno en el componente MuralSizeBox, esto devolverá
      un box con todas las propiedades definidas en el map por cada elemento, es decir, en este caso 6 boxes, en la
      propiedad selected comparo si el valor size es igual al que esta guardado en el estado, de esta manera me devolverá
      un booleano que posteriormente lo uso para ponerle una deterinada clase de css. En la propiedad onChange recibo la función
      onSizeChange definida arriba */}
        {size_boxes.map((box, index) => {
         return (
          <MuralSizeBox
            key={index}
            mySize={box.size}
            name={box.name}
            text={box.text}
            proportion={box.proportion}
            selected={box.size === size}
            onChange={this.onSizeChange}
            />
         )
        })}
      </div>
      {/* con esta comparacion puedo saber si el box seleccionado es el box custom y desencadenar una funcionalidad única que tiene este box:
      dos inputs con valores personalizados por el usuario los cuales se setearan en el estado gracias a las funciones onCustomWidthChange
      y onCustomHeightChange, si no es custom el box seleccionado no se desencadena nada */}
      {size === 'custom' ? (
      <CustomValues
        onCustomWidthChange={this.onCustomWidthChange}
        onCustomHeightChange={this.onCustomHeightChange}
        customWidth={customWidth}
        customHeight={customHeight}
      />
      ) : null}
      <div className="mural-button">
      {/* aca defino el boton que da por finalizado el formulario, este boton se habilita solo si recibe valores válidos, es decir,
      hay algún elemento seleccionado o los valores personalizados de custom estan entre 3000 y 60000 */}
      <button
        type="submit"
        disabled={size === '' || customWidth <3000
        || customWidth >60000 || customHeight <3000 || customHeight >60000}>
        DONE
      </button>
      </div>

      </form>


    )
  }
}

export default Form;