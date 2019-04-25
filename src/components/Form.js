import React, { Component } from 'react';
import Title from './Title';
// import SlideCards from './SlideCards';
// import CustomValues from './CustomValues';
import Card from './Card';
import CustomValues from './CustomValues';

let cards = [
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
  onSizeChange = (size) => {
    this.setState({
      size: size
    });
  };

  onCustomWidthChange = (customWidth) => {
    this.setState({
      customWidth: customWidth
    });
  };

  onCustomHeightChange = (customHeight) => {
    this.setState({
      customHeight: customHeight
    });
  };

  onSubmit = (event) => {
    event.preventDefault()
    if(this.state.size === 'custom') {
      if(this.state.customWidth < 3000 || this.state.customWidth > 60000) {
        alert('El ancho debe ser mayor a 3000 y menor a 60000')
      }
      if(this.state.customHeight < 3000 || this.state.customHeight > 60000) {
        alert('El alto debe ser mayor a 3000 y menor a 60000')
      }
    }
  }

  render() {
    console.log(this.state.size)
    return (
      <form onSubmit={this.onSubmit}>
      <Title />
      <p>MURAL SIZE</p>
      <div className="mural-size-selector">
        {cards.map((card, index) => {
         return (
          <Card
            key={index}
            mySize={card.size}
            name={card.name}
            text={card.text}
            proportion={card.proportion}
            selected={card.size === this.state.size}
            onChange={this.onSizeChange}
            />
         )
        })}
      </div>
      {this.state.size === 'custom' ? (
      <CustomValues
        onCustomWidthChange={this.onCustomWidthChange}
        onCustomHeightChange={this.onCustomHeightChange}
        customWidth={this.state.customWidth}
        customHeight={this.state.customHeight}
      />
      ) : null}
      <button type="submit" disabled={this.state.size === ''}>
        DONE
      </button>

      </form>


    )
  }
}

export default Form;