import { EventEmitter } from "events";

import dispatcher from "../../dispatcher.jsx";

class CalculatorStore extends EventEmitter {
  constructor() {
    super()
    this.state = {
      finalResult: 0,
      currentInput: 0,
      todo: '',
      isCalculated: false,
    }
  }

  getResult() {
    return this.state;
  }

  resetCalculator() {
    this.state = {
      finalResult:0,
      currentInput: 0,
      todo: '',
      isCalculated: false
    };

    this.emit("change");
  }

  calculateResult(input, todo) {
    switch(todo) {
      case "+": {
        this.setState({
          finalResult: finalResult + input,
          isCalculated: true
        });
        break;
      }
      case "-": {
        this.setState({
          finalResult: finalResult - input,
          isCalculated: true
        });
        break;
      }
      case "x": {
        this.setState({
          finalResult: finalResult * input,
          isCalculated: true
        });
        break;
      }
      case "÷": {
        this.setState({
          finalResult: finalResult / input,
          isCalculated: true
        });
        break;
      }
    }
  }

  receiveInput(input) {
    if (input == '+' || input == '-' || input == 'x' || input == '÷') {
      this.setState({
        todo: input,
        isCalculated: false
      })
    } else {
      this.setState({
        currentInput: input,
        isCalculated: false
      })
    }
  }

  handleActions(action) {
    switch(action.type) {
      case "RESET_CALCULATOR": {
        this.resetCalculator();
        this.emit("change");
        break;
      }
      case "RECEIVE_INPUT": {
        this.receiveInput(action.input)
        this.emit("change");
        break;
      }
      case "CALCULATE_RESULT": {
        this.receiveInput(action.input, action.todo)
        this.emit("change")
        break;
      }
    }
  }

}

const calculatorStore = new CalculatorStore;
dispatcher.register(calculatorStore.handleActions.bind(calculatorStore));

export default calculatorStore;
