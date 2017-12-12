import React from 'react'

import CalculatorComponent from '../components/CalculatorComponent.jsx';
import CalculatorStore from "../stores/CalculatorStore.jsx";

export default class CalculatorPage extends React.Component {
  constructor(props) {
    super(props);
    this.getResults = this.getResults.bind(this);
    this.state = {
      hasError: false,
      calculatorData: CalculatorStore.getResult(),
    };
  }

  componentWillMount() {
    CalculatorStore.on("change", this.getResults);
  }

  componentWillUnmount() {
    CalculatorStore.removeListener("change", this.getResults);
  }

  componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      console.log(error);
  }

  getResults() {
    this.setState({
      calculatorData: CalculatorStore.getResult()
    });
  }

  render() {
    return (
      <div>
        <CalculatorComponent result={this.state.calculatorData}/>
      </div>
    );
  }
}
