import React from 'react';

import ResultComponentStyle from './resultComponent.css'

class ResultComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  disPlayResult() {
    const { result } = this.props;
    if (result.isCalculated) {
      return result.finalResult;
    } else {
      return result.currentInput;
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
