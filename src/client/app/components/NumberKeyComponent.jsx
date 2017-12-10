import React from 'react';

import NumberKeyComponentStyle from './numberKeyComponent.css';

class NumberKeyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charactor: this.props.charactor,
      isEqual: false
    }
  }

  render() {
    const buttonStyle = this.props.isEqual ? NumberKeyComponentStyle.equalButton : NumberKeyComponentStyle.normalButton
    return (
      <button className={buttonStyle}>
        {this.props.charactor}
      </button>
    );
  }
}

export default NumberKeyComponent
