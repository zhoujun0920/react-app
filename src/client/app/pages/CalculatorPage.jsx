import React from 'react'

import CalculatorComponent from '../components/CalculatorComponent.jsx';
import * as CalculatorActions from "../actions/CalculatorActions.jsx";
import CalculatorStore from "../stores/CalculatorStore.jsx";

export default class CalculatorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      calculatorData: CalculatorStore.getResult(),
    };
  }

  componentWillMount() {
    CalculatorStore.on("change", this.getResult);
  }

  componentWillUnmount() {
    CalculatorStore.removeListener("change", this.getResult);
  }

  componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      logErrorToMyService(error, info);
  }

  getResult() {
    this.setState({
      calculatorData: CalculatorStore.getResult()
    });
  }

  resetCalculator() {
    CalculatorActions.resetCalculator();
  }

  render() {
    return (
      <div>
        <CalculatorComponent result={this.state.calculatorData}/>
      </div>
    );
  }
}
