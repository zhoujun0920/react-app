import React from 'react';

import ResultComponentStyle from './resultComponent.css'

class ResultComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  disPlayResult() {
    const { result } = this.props;
    if (result.result.isCalculated) {
      return result.result.finalResult;
    } else {
      return result.result.currentInput;
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
