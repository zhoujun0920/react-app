import React from 'react';

import NumberKeyComponent from './NumberKeyComponent.jsx';
import ResultComponent from './ResultComponent.jsx';
import CalculatorComponentStyle from './calculatorComponent.css';

class CalculatorComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderKeyComponent(i) {
    return (
      <NumberKeyComponent charactor={i} isEqual={false}></NumberKeyComponent>
    );
  }

  renderEqualComponent(i) {
    return (
      <NumberKeyComponent charactor={i} isEqual={true}></NumberKeyComponent>
    );
  }

  renderNumberPanel() {
    return (
      <div className={CalculatorComponentStyle.box}>
        {this.renderResultPanel()}
        <div className={CalculatorComponentStyle.row}>
          {
            this.renderKeyComponent('AC')
          }
          {this.renderKeyComponent('+/-')}
          {this.renderKeyComponent('%')}
          {this.renderKeyComponent('÷')}
        </div>
        <div className={CalculatorComponentStyle.row}>
          {this.renderKeyComponent(7)}
          {this.renderKeyComponent(8)}
          {this.renderKeyComponent(9)}
          {this.renderKeyComponent('x')}
        </div>
        <div className={CalculatorComponentStyle.row}>
          {this.renderKeyComponent(4)}
          {this.renderKeyComponent(5)}
          {this.renderKeyComponent(6)}
          {this.renderKeyComponent('-')}
        </div>
        <div className={CalculatorComponentStyle.row}>
          {this.renderKeyComponent(1)}
          {this.renderKeyComponent(2)}
          {this.renderKeyComponent(3)}
          {this.renderKeyComponent('+')}
        </div>
        <div className={CalculatorComponentStyle.row}>
          {this.renderKeyComponent(0)}
          {this.renderKeyComponent('.')}
          {this.renderEqualComponent('=')}
        </div>
      </div>
    );
  }

  renderResultPanel() {
    return (
      <ResultComponent result={this.props}/>
    );
  }

  render() {
    return (
      <div>
        {this.renderNumberPanel()}
      </div>
    );
  }
}

export default CalculatorComponent
