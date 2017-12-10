import React from 'react';

import ResultComponentStyle from './resultComponent.css'

class ResultComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }

  render() {
    return (
      <div>
        <p className={ResultComponentStyle.resultBox}>{this.state.result}</p>
      </div>
    );
  }
}

export default ResultComponent
