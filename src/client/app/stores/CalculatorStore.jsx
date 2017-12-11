import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class CalculatorStore extends EventEmitter {
  constructor() {
    super()
    this.results = {
      finalResult = 0,
      currentInput = 0,
    }
  }

  resetCalculator() {
    this.results = {
      finalResult = 0,
      currentInput = 0,
    };

    this.emit("change");
  }

  receiveInput(input, todo) {
    switch(todo) {
      case "add": {
        this.setState({
          finalResult = finalResult + input,
          currentInput = input
        });
        break;
      }
      case "minus": {
        this.setState({
          finalResult = finalResult - input,
          currentInput = input
        });
        break;
      }
      case "times": {
        this.setState({
          finalResult = finalResult * input,
          currentInput = input
        });
        break;
      }
      case "divide": {
        this.setState({
          finalResult = finalResult / input,
          currentInput = input
        });
        break;
      }
    }

  }

  handleActions(action) {
    switch(action.type) {
      case "RESET_CALCULATOR": {
        this.resetCalculator();
        break;
      }
      case "RECEIVE_INPUT": {
        this.receiveInput(action.input, action.todo)
        this.emit("change");
        break;
      }
    }
  }

}

const calculatorStore = new CalculatorStore;
dispatcher.register(calculatorStore.handleActions.bind(calculatorStore));

export default calculatorStore;
