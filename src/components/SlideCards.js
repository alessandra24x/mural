import React, {Component} from 'react';
import Card from './Card';

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

class SlideCards extends Component {
  render() {
    return(
      <div className="mural-size-selector">
        {cards.map((c, i) => {
         return <Card key={i} mySize={c.size} name={c.name} text={c.text} proportion={c.proportion} />
        })}
      {/* {this.state.size === Custom ? <CustomValues /> : null} */}

      </div>

    )
  }
}

export default SlideCards;