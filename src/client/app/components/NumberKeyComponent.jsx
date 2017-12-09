import React from 'react';

class NumberKeyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactor: this.props.charactor
    }
  }

  render() {
    return (
      <button>
        {this.props.charactor}
      </button>
    );
  }
}

export default NumberKeyComponent
