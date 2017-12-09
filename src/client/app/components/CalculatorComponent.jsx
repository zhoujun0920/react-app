import React from 'react';

import NumberKeyComponent from './NumberKeyComponent.jsx';

class CalculatorComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderKeyComponent(i) {
    return (
      <NumberKeyComponent charactor={i}></NumberKeyComponent>
    );
  }

  renderNumberPanel() {
    return (
      <div>
        <div>
          {this.renderKeyComponent('AC')}
          {this.renderKeyComponent('+/-')}
          {this.renderKeyComponent('%')}
          {this.renderKeyComponent('÷')}
        </div>
        <div>
          {this.renderKeyComponent(7)}
          {this.renderKeyComponent(8)}
          {this.renderKeyComponent(9)}
          {this.renderKeyComponent('x')}
        </div>
        <div>
          {this.renderKeyComponent(4)}
          {this.renderKeyComponent(5)}
          {this.renderKeyComponent(6)}
          {this.renderKeyComponent('-')}
        </div>
        <div>
          {this.renderKeyComponent(1)}
          {this.renderKeyComponent(2)}
          {this.renderKeyComponent(3)}
          {this.renderKeyComponent('+')}
        </div>
        <div>
          {this.renderKeyComponent(0)}
          {this.renderKeyComponent('.')}
          {this.renderKeyComponent('=')}
        </div>
      </div>
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
