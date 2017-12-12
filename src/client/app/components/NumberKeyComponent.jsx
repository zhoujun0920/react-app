import React from 'react';

import NumberKeyComponentStyle from './numberKeyComponent.css';
import * as CalculatorActions from "../actions/CalculatorActions.jsx";

class NumberKeyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getInput = this.getInput.bind(this);
    this.state = {
      charactor: this.props.charactor,
      isEqual: false
    }
  }

  getInput() {
    if (this.props.charactor === 'AC') {
      CalculatorActions.resetCalculator();
    } else if (this.props.charactor === 'C') {
      CalculatorActions.resetInput();
    } else if (this.props.charactor === '=') {
      CalculatorActions.calculateResult();
    } else {
      CalculatorActions.receiveInput(this.props.charactor);
    }
  }

  render() {
    const buttonStyle = this.props.isEqual ? NumberKeyComponentStyle.equalButton : NumberKeyComponentStyle.normalButton
    return (
      <button className={buttonStyle} onClick={this.getInput}>
        {this.props.charactor}
      </button>
    );
  }
}

export default NumberKeyComponent
