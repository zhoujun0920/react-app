import React from 'react'

export default class CalculatorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      logErrorToMyService(error, info);
    }

  render() {
    return (
      <div>
        Calculator!
      </div>
    );
  }
}
