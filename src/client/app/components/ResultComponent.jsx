import React from 'react';

import ResultComponentStyle from './resultComponent.css'

class ResultComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }

  disPlayResult() {
    if (this.props.calculatorData.isCalculated) {
      return this.props.calculatorData.finalResult;
    } else {
      return this.props.calculatorData.currentInput;
    }
  }

  render() {
    return (
      <div>
        <p className={ResultComponentStyle.resultBox}>{this.disPlayResult()}</p>
      </div>
    );
  }
}

export default ResultComponent
